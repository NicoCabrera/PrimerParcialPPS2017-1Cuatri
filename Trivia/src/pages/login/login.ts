import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { About } from "../about/about";
import { SignUp } from "../sign-up/sign-up";
import { RegisteredUser } from "../registered-user/registered-user";


import { AuthService } from '../../providers/auth-service';

import { Result } from "../result/result";

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'login-home',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  form: FormGroup;
  title: string = 'Trivia MD: Login';
  hideSpinner: boolean = true;
  constructor(public navCtrl: NavController, private fb: FormBuilder, private toastCtrl: ToastController,private _auth: AuthService) {
  }

  //Methods
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.maxLength(35)]],
      password: ["", [Validators.required]]
    });
  }

  fakeSignIn(){
    this.hideSpinner = true;
    this.navCtrl.push(RegisteredUser, {username:"Nicolas"});
  }
  signIn() {
    this.hideSpinner = false;
    let message: string = "";

    this._auth.signIn(this.form.get('email').value,this.form.get('password').value)
    .then(() => {
        this.hideSpinner = true;
        this.navCtrl.push(RegisteredUser, { username: name });

      }).catch((error) => {
        this.hideSpinner = true;
        message = "Error: ";
        switch (error['code']) {
          case 'auth/user-not-found':
            message += 'Usuario no encontrado.';
            break;
          case 'auth/wrong-password':
            message += 'La contraseña ingresada no es válida.';
            break;
          case 'auth/invalid-email':
            message += 'El formato del correo electrónico no es válido.';
            break;
          case 'auth/too-many-requests':
            message += 'Aguarde un momento y vuelva a intentarlo.';
            break;
          default:
            message += 'Desconocido.';
        }
        this.showErrorMessage(message);
      });
  }

  signUp() {
    this.navCtrl.push(SignUp)
  }

  ionViewWillEnter() {
    this.form.reset();
  }

  showAboutPage(): void {
    this.navCtrl.push(About);
  }
  showErrorMessage(message: string): void {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }


  goToResult(){
    let data = [];
    data.push({answer:"asdasd", text:"¿asdasdasdasd asda?"});
    data.push({answer:"werwerwe", text:"¿aerwerwer?"});
    data.push({answer:"kikikikik", text:"¿kikik ik?"});

    let correctAnswers = 2;
    let incorrectAnswers = 1;
    this.navCtrl.push(Result,{results:data,correctAnswers:correctAnswers,incorrectAnswers:incorrectAnswers});

  }

}
