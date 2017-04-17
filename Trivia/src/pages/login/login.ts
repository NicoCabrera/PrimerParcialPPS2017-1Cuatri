import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisteredUser } from "../registered-user/registered-user";

@Component({
  selector: 'login-home',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  form: FormGroup;
  title: string = 'Trivia MD: Login';

  constructor(public navCtrl: NavController, private fb: FormBuilder, private toastCtrl: ToastController) {

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.maxLength(30)]]
    });
  }

  signIn() {
    this.navCtrl.push(RegisteredUser, { username: this.form.get("username").value });
  }

  ionViewWillEnter() {
    this.form.reset();
  }

  register(): void {
    let toast = this.toastCtrl.create({
      message: 'Work in progress',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
}
