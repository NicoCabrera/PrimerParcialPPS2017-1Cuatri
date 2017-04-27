import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisteredUser } from "../registered-user/registered-user";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map'; import 'rxjs/add/operator/filter';
/**
 * Generated class for the SignUp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUp implements OnInit {

  form: FormGroup;
  users$: FirebaseListObservable<any>;
  showUserExistErrorMessage: boolean = false;
  hideSpinner: boolean = true;
  disabledFormControl: boolean = false;
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.maxLength(35)]],
      password: ["", [Validators.required]],
      username: ["", [Validators.required]]
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private af: AngularFire, private toastCtrl: ToastController) {
  }

  signUp() {
    let message: string = "";
    let credentials = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    this.changeStateControls();
    this.af.auth.createUser(credentials)
      .then(() => {
        this.saveUserDataAndGoAhead(credentials);
      })
      .catch((error) => {
        {
          console.log(error['code']);
          message = "Error: "
          switch (error['code']) {
            case "auth/email-already-in-use":
              message += "Ya existe un usuario registrado con el email ingresado";
              break;
            case "auth/invalid-email":
              message += "Ingrese un e-mail válido";
              break;
            case "auth/weak-password":
              message += "La contraseña debe contener al menos 6 digitos";
              break;
            case 'auth/too-many-requests':
              message += 'Aguarde un momento y vuelva a intentarlo.';
              break;
            default:
              message += 'Desconocido.';
          }
          this.changeStateControls();
          this.showErrorMessage(message);
        }
      });
  }

  showErrorMessage(message: string): void {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  changeStateControls() {
    this.hideSpinner = !this.hideSpinner;
    this.disabledFormControl = !this.disabledFormControl;
  }

  saveUserDataAndGoAhead(credentials) {
    this.af.database.object("/users/" + this.af.auth.getAuth().uid).set({
      username: this.form.get('username').value,
      password: credentials.password,
      email: credentials.email,
    }).then(() => {
      this.hideSpinner = true;
      this.navCtrl.push(RegisteredUser, { email: this.form.get("username").value });
    }).catch((error)=>{
        alert("Error.El usuario no ha sido registrado.")
        this.changeStateControls();
    });
  }

}
