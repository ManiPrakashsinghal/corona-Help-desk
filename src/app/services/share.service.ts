import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private data: any = {};
  private key: any;
  constructor(
    private navCtrl: NavController
  ) { }

  setData(key: any, data: any){
    this.data[key] = data;
  }

  getData(key:any){
    return this.data[key];
  }

  removeData(key:any){
    delete this.data[key];
  }

  goBack(){
    this.navCtrl.pop();
  }
  getList(){
    
  }
  checkAuth(userName, password){
    if(userName == this.data['name'] && password == this.data['password']){
      return true;
    }else{
      return false;
    }
  }

}
