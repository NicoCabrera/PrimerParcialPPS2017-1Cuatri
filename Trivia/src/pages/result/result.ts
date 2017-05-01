import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from "angularfire2";
import { Match } from "../../app/entities/match";
import { RegisteredUser } from "../registered-user/registered-user";
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class Result {

  results;
  correctAnswers: number;
  incorrectAnswers: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire) {
    this.results = [];
  }

  ionViewDidLoad() {
    this.results = this.navParams.get("results");
    this.correctAnswers = this.navParams.get("correctAnswers");
    this.incorrectAnswers = this.navParams.get("incorrectAnswers");
    this.saveResult();
  }

  saveResult() {
    let matches = this.af.database.list("matches");
    let match = new Match(this.results,
                         this.navParams.get("username"));
    matches.push(match);
  }


  backToRegisteredUser() {
    this.navCtrl.pop().then(()=>{
      this.navCtrl.pop();
    });
  }
}
