import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { Questions } from "../questions/questions";
import { AuthService } from "../../providers/auth-service";
import { HistoricalResults } from "../historical-results/historical-results";
/**
 * Generated class for the RegisteredUser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage(
)
@Component({
  selector: 'page-registered-user',
  templateUrl: 'registered-user.html',
})
export class RegisteredUser {
  username:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:ToastController,private _auth: AuthService) {
    this.username = this.navParams.get("username").$value;
  }

  ionViewDidLoad() {
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
    this.navCtrl.push(Questions, {username: this.username});
  }

  showHistoricalResults(){
    this.navCtrl.push(HistoricalResults);
  }

  logOutOnClick()
  { 
    this.navCtrl.popToRoot();
    this._auth.signOut();
  }
}
