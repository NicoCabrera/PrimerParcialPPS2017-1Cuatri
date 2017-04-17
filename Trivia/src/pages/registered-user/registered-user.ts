import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisteredUser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-registered-user',
  templateUrl: 'registered-user.html',
})
export class RegisteredUser {
  username:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");
  }

  showInProgressMessage():void{
    let toast = this.toastCtrl.create({
      message: 'Work in progress',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  
  
}
