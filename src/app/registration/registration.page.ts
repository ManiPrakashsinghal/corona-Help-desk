import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareService } from '../services/share.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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
  
  constructor(
    private fb: FormBuilder,
    private shareService: ShareService,
    private router: Router,
    public navCtrl: NavController,
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
    this.firebaseAuth.onAuthStateChanged(function(userInfo) {
      if (userInfo) {

          this.navCtrl.navigateRoot['/list']
      } else {
        this.navCtrl.navigateRoot['']

          // user was signed out
      }
  });
  }

  get errorControl() {
    return this.registrationForm.controls;
  }

  ngOnInit() {
    this.mode = this.shareService.getData('mode');
  }

  register(mode: String){
    console.log("user", this.registrationForm.value);
    localStorage.setItem('user', JSON.stringify(this.registrationForm.value));
    this.shareService.setData('flag',mode);
    this.phoneAuth();
    // this.router.navigate(['/list',])

  }
  phoneAuth(){
    this.firebaseAuth.verifyPhoneNumber(this.registrationForm.get('phoneNo').value,30000).then(verifyId=>{
      this.verificationId = verifyId; 
    }).catch(err=>{
      console.log(err);
      
    })
  }
  signInCode(){
    this.firebaseAuth.signInWithVerificationId(this.verificationId, "123456").then(user=>{
      console.log(user);
      
    });
  }

}
