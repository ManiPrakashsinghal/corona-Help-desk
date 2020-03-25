import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      name: [null],
      address: [null],
      pinCode: [null],
      phoneNo: [null],
      description: [null],
      // city: [null],
      // state: [null]
    })
  }

  ngOnInit() {
    this.mode = this.shareService.getData('mode');
  }

}
