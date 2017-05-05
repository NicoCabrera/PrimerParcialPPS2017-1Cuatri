import { Component } from '@angular/core';
import { Match } from "../../app/entities/match";
import { NavController, NavParams } from "ionic-angular";
import { AngularFire } from "angularfire2";
  
@Component({
  selector: 'draw-matches-tab',
  templateUrl: 'draw-matches-tab.html'
})
export class DrawMatchesTab {

  matches: Array<Match>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire) {
  }

  ngOnInit(): void {
    this.af.database
      .list("drawmatches", {
        query: {
          limitToLast: 10
        }
      })
      .subscribe(matches => {
        this.matches = matches
      });
  }

}
