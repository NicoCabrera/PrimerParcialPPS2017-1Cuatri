import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

import { AboutPage } from "../about-page/about-page";
import { RegisteredUserPage } from "../registered-user-page/registered-user-page";




@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

  form: FormGroup;
  title: string = 'Login';
  constructor(public navCtrl: NavController, private fb: FormBuilder, private toastCtrl: ToastController) {
  }

  //Methods
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.maxLength(35)]],
    });
  }

  signIn() {
    this.navCtrl.push(RegisteredUserPage,{username:this.form.get("username").value});
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
