import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire } from "angularfire2";
import { Match } from "../../app/entities/match";

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class Result {

  results;
  correctAnswers:number;
  incorrectAnswers:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private af:AngularFire) {
    this.results = [];
  }

  ionViewDidLoad() {
    this.results = this.navParams.get("results");
    this.correctAnswers =  this.navParams.get("correctAnswers");
    this.incorrectAnswers =  this.navParams.get("incorrectAnswers");
    console.log(this.navParams.data);

    this.saveResult();
  }

  saveResult(){
    debugger;
    let matches = this.af.database.list("matches",{
      query:{
        limitToLast: 10,
        orderByKey: true
      }
    });
    console.log(matches);

    let match = new Match(this.results,"nombre del usuario")

    matches.push(match);
  }
}
