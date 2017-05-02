import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

import { AboutPage } from "../about-page/about-page";
import { SignUpPage } from "../sign-up-page/sign-up-page";
import { RegisteredUserPage } from "../registered-user-page/registered-user-page";

import { AuthService } from '../../providers/auth-service';
import { AngularFire } from "angularfire2";



@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

  form: FormGroup;
  title: string = 'Login';
  hideSpinner: boolean = true;
  constructor(public navCtrl: NavController, private fb: FormBuilder, private toastCtrl: ToastController,private _auth: AuthService, private af:AngularFire) {
  }

  //Methods
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.maxLength(35)]],
      password: ["", [Validators.required]]
    });
  }

  signIn() {
    this.hideSpinner = false;
    let message: string = "";
    
    this._auth.signIn(this.form.get('email').value,this.form.get('password').value)
    .then(() => {
        this.af.database.object("users/"+ this._auth.auth$.getAuth().uid + "/username")
        .subscribe(username=> {
          this.hideSpinner = true;
          this.navCtrl.push(RegisteredUserPage, { username: username})
        });
        
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
    this.navCtrl.push(SignUpPage)
  }

  ionViewWillEnter() {
    this.form.reset();
  }

  showAboutPage(): void {
    this.navCtrl.push(AboutPage);
  }

  showErrorMessage(message: string): void {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }

}
