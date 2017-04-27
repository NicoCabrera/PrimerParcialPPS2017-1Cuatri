import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { Questions } from "../questions/questions";
import { AuthService } from "../../providers/auth-service";
/**
 * Generated class for the RegisteredUser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registered-user',
  templateUrl: 'registered-user.html',
})
export class RegisteredUser {
  username:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:ToastController,private _auth: AuthService) {
  }

  ionViewDidLoad() {
      this.username = "";
  }

  showInProgressMessage():void{
    let toast = this.toastCtrl.create({
      message: 'Work in progress',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  showQuestionsPage(){
    this.navCtrl.push(Questions);
  }

  logOutOnClick()
  { 
    this.navCtrl.popToRoot();
    this._auth.signOut();
  }
}
