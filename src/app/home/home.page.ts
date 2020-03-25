import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private shareService: ShareService
  ) {}

  registration(mode: string){
    this.shareService.setData('mode', mode);
    this.navCtrl.navigateForward('/registration');
  }

}
