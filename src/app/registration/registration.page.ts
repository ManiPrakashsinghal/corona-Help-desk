import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareService } from '../services/share.service';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public registrationForm: FormGroup;
  public mode: String;
  verificationId: any;
  text: any = 'begining'
  verificationFlag = true;
  otp: string;
  constructor(
    private fb: FormBuilder,
    private shareService: ShareService,
    private router: Router,
    public navCtrl: NavController,
    public toastController: ToastController,
    private firebaseAuth: FirebaseAuthentication
  ) { 
    this.registrationForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      address: [null, [Validators.required]],
      pinCode: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      phoneNo: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      // city: [null],
      // state: [null]
    })
  //   this.firebaseAuth.onAuthStateChanged().subscribe(userInfo=> {
  //     if (userInfo) {
  //         this.navCtrl.navigateRoot['/list']
  //     } else {
  //       this.navCtrl.navigateRoot['']

  //     }
  // });
  }

  get errorControl() {
    return this.registrationForm.controls;
  }

  ngOnInit() {
    this.mode = this.shareService.getData('mode');
  }

  register(mode: String){
    this.shareService.presentToast("Data done", 2000);
    console.log("user", this.registrationForm.value);
    localStorage.setItem('user', JSON.stringify(this.registrationForm.value));
    this.shareService.setData('flag',mode);
    this.phoneAuth();
    this.router.navigate(['/list',])

  }
  
  phoneAuth(){
    let tel = `+91${this.registrationForm.get('phoneNo').value}`;
    this.firebaseAuth.verifyPhoneNumber(tel, 3000).then(verifyId=>{
      this.verificationId = verifyId;
      this.text = "going to verify"
     this.presentToast()
      this.verificationFlag = true;
      setTimeout(()=>{this.signInCode()}, 1000)
    }).catch(err=>{
      console.log(err);
      this.text = 'Login Failed'
   this.presentToast()
    })
  }


  signInCode(){
    this.firebaseAuth.signInWithVerificationId(this.verificationId, this.otp).then(user=>{
      console.log(user);
      this.text = 'verified!'
   this.presentToast()
    }).catch(err => {
      console.log(err);
      this.text = 'verification Failed'
   this.presentToast()
    });
  }
  onVerifiy(){
    this.signInCode();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.text,
      duration: 2000
    });
    toast.present();
  }
}
