import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { AppData } from '../../providers/app-data';
import { AngularFire } from "angularfire2";
import { Match } from "../../app/entities/match";



@IonicPage()
@Component({
  selector: 'page-historical-results',
  templateUrl: 'historical-results.html',
})
export class HistoricalResults {
  matches;
  constructor(public navCtrl: NavController, public navParams: NavParams, private af:AngularFire) {
  }

  ionViewDidLoad() {
    this.af.database
        .list("matches",{
          query:{
            limitToLast: 10
          }
        })
        .subscribe(matches=>{
          this.matches = matches
        });
  }

}
