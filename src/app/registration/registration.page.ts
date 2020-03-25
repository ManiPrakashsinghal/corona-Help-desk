import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareService } from '../services/share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public registrationForm: FormGroup;
  public mode: String;
  
  constructor(
    private fb: FormBuilder,
    private shareService: ShareService,
    private router: Router
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
    this.router.navigate(['/list',])

  }

}
