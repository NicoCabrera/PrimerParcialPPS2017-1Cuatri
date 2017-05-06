import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
  selector: 'page-registered-user',
  templateUrl: 'registered-user-page.html',
})
export class RegisteredUserPage implements OnInit {
  username: string;


  ngOnInit(): void {
    this.nativeAudio.preloadSimple('hadoken', 'assets/sound/hadoken.mp3');
    this.nativeAudio.preloadSimple("shoryuken","assets/sound/shoryuken.mp3");
    this.nativeAudio.preloadSimple("sonicboom","assets/sound/sonicboom.mp3");
    this.nativeAudio.preloadSimple("tatsumakisenpukyaku","assets/sound/tatsumakisenpukyaku.mp3");

  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private nativeAudio: NativeAudio) {
    this.username = this.navParams.get("username");
  }

  ionViewDidLoad() {

  }

  showInProgressMessage(): void {
    let toast = this.toastCtrl.create({
      message: 'Work in progress',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  ataque1() {
    this.nativeAudio.play("hadoken");
  }
  ataque2() {
    this.nativeAudio.play("shoryuken");
  }
  ataque3() {
    this.nativeAudio.play("sonicboom");
  }
  ataque4() {
    this.nativeAudio.play("tatsumakisenpukyaku");
  }

  logOutOnClick() {
    this.navCtrl.popToRoot();
  }
}

