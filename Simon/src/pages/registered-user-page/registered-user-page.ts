import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';

@IonicPage()
@Component({
  selector: 'page-registered-user',
  templateUrl: 'registered-user-page.html',
})
export class RegisteredUserPage implements OnInit {
  username: string;
  playedSounds: string[];
  disabledButtons: boolean;
  playerSounds: string[];
  hideCongratulation: boolean;
  hideBetterLuckNexTime: boolean;
  stopInterval:number;
  disabledListenButton:boolean;

  ngOnInit(): void {
    this.nativeAudio.preloadSimple('hadoken', 'assets/sound/hadoken.mp3');
    this.nativeAudio.preloadSimple("shoryuken", "assets/sound/shoryuken.mp3");
    this.nativeAudio.preloadSimple("sonicboom", "assets/sound/sonicboom.mp3");
    this.nativeAudio.preloadSimple("tatsumakisenpukyaku", "assets/sound/tatsumakisenpukyaku.mp3");
    this.pushNextSound();

  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private vibration: Vibration, private nativeAudio: NativeAudio) {
    this.username = this.navParams.get("username");
    this.disabledButtons = true;
    this.disabledListenButton = false;
    this.hideCongratulation = true;
    this.hideBetterLuckNexTime = true
    this.playedSounds = [];
    this.playerSounds = [];
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
    this.vibration.vibrate(1000);
    this.playerSounds.push("hadoken");
    this.checkSecuence();
  }
  ataque2() {
    this.nativeAudio.play("shoryuken");
    this.vibration.vibrate(1000);
    this.playerSounds.push("shoryuken");
    this.checkSecuence();
  }
  ataque3() {
    this.nativeAudio.play("sonicboom");
    this.vibration.vibrate(1000);
    this.playerSounds.push("sonicboom");
    this.checkSecuence();
  }
  ataque4() {
    this.nativeAudio.play("tatsumakisenpukyaku");
    this.vibration.vibrate(1000);
    this.playerSounds.push("tatsumakisenpukyaku");
    this.checkSecuence();
  }

  logOutOnClick() {
    this.navCtrl.popToRoot();
  }

  listen() {
    this.disabledButtons = true;
    this.disabledListenButton = true;
    let sounds = [];
    
    for(let i = 0;i < this.playedSounds.length;i++)
    {
      sounds.push(this.playedSounds[i]);
    }
    sounds.reverse();
    this.stopInterval = setInterval(() => {
      if(sounds.length > 0){
        let sound = sounds.pop();
        this.nativeAudio.play(sound);
        console.log(sound);
        this.disabledButtons = true;
        this.disabledListenButton = true;
      }else
      {
       clearInterval(this.stopInterval);
       this.disabledButtons = false;
       this.disabledListenButton = false;
      }
    }, 2000);

  }

  pushNextSound() {
    let whichSound: string = "";
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        whichSound = "hadoken";
        break;
      case 1:
        whichSound = "shoryuken";
        break;
      case 2:
        whichSound = "sonicboom";
        break;

      default:
        whichSound = "tatsumakisenpukyaku";
        break;
    };

    this.playedSounds.push(whichSound);
  }

  checkSecuence() {
    if (this.playedSounds.length === this.playerSounds.length) {
      this.disabledButtons = true;
      this.disabledListenButton = true;
      if (JSON.stringify(this.playedSounds) === JSON.stringify(this.playerSounds)) {
        this.hideCongratulation = false;
        this.pushNextSound();
      } else {
        this.hideBetterLuckNexTime = false;
      }

      this.playerSounds = [];
      setTimeout(() => {
        this.hideBetterLuckNexTime = true;
        this.hideCongratulation = true;
        this.disabledListenButton = !this.disabledListenButton;
        this.disabledButtons = !this.disabledButtons;
      }, 2000);
    } 
  }
}

