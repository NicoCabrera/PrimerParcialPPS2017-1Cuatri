import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { Questions } from "../questions/questions";
import { AngularFire } from 'angularfire2';
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
  email:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:ToastController,private af:AngularFire) {
  }

  ionViewDidLoad() {
    this.email = this.navParams.get("email");
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

  logOut()
  {
    this.af.auth.logout().then(()=>{
      alert("Usuario deslogueado");
    }).catch(error=>{
      alert("Error desconocido");
    });

  }
}
