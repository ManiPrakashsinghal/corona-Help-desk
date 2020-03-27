import { Component } from '@angular/core';
import { ShareService } from '../services/share.service';
import { from } from 'rxjs';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private shareService: ShareService,
    private navCtrl: NavController
  ) {
   
  }

  registration(mode: string){
    this.shareService.setData('mode', mode);
    this.navCtrl.navigateForward('/registration');
  }
  

}
