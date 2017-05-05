import { Component } from '@angular/core';
import { Match } from "../../app/entities/match";
import { NavController, NavParams } from "ionic-angular";
import { AngularFire } from "angularfire2";

/**
 * Generated class for the LoseMatchesTab component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'lose-matches-tab',
  templateUrl: 'lose-matches-tab.html'
})
export class LoseMatchesTab {

  matches: Array<Match>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire) {
  }

  ngOnInit(): void {
    this.af.database
      .list("losematches", {
        query: {
          limitToLast: 10
        }
      })
      .subscribe(matches => {
        this.matches = matches.reverse()
      });
  }
}
