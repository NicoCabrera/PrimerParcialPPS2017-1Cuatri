import { Component, OnInit } from '@angular/core';
import { Match } from "../../app/entities/match";
import { NavController, NavParams } from "ionic-angular";
import { AngularFire } from "angularfire2";
import { MatchResultPipe } from "../../pipes/match-result";
@Component({
  selector: 'win-matches-tab',
  templateUrl: 'win-matches-tab.html'
})
export class WinMatchesTab implements OnInit {
  matches:Array<Match>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire) {
  }

  ngOnInit(): void {
    this.af.database
      .list("winmatches", {
        query: {
          limitToLast: 10
        }
      })
      .subscribe(matches => {
        this.matches = matches
      });
  }



}
