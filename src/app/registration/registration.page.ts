import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareService } from '../services/share.service';

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
    private shareService: ShareService
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
    localStorage.setItem('user', JSON.stringify(this.registrationForm.value))
  }

}
