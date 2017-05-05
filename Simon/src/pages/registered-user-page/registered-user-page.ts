import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { MatchPage } from "../match-page/match-page";
import { HistoricalResultsPage } from "../historical-results-page/historical-results-page";

@IonicPage()
@Component({
  selector: 'page-registered-user',
  templateUrl: 'registered-user-page.html',
})
export class RegisteredUserPage {
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

  showMatchPage(){
    this.navCtrl.push(MatchPage,{username:this.username});
  }

  showHistoricalResults(){
    this.navCtrl.push(HistoricalResultsPage);
  }

  logOutOnClick()
  { 
    this.navCtrl.popToRoot();
    this._auth.signOut();
  }
}

