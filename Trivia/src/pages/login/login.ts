import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { About } from "../about/about";
import { SignUp } from "../sign-up/sign-up";
import { RegisteredUser } from "../registered-user/registered-user";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

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
  constructor(public navCtrl: NavController, private fb: FormBuilder, private toastCtrl: ToastController, private af: AngularFire) {
  }

  //Methods
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.maxLength(35)]],
      password: ["", [Validators.required]]
    });
  }

  signIn() {
    let message: string = "";

    this.af.auth.login({
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(() => {
        this.navCtrl.push(RegisteredUser, { email: this.form.get("email").value });
      }).catch((error) => {
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
}
