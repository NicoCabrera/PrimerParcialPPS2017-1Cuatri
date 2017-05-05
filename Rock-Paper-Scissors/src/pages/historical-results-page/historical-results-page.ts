import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WinMatchesTab } from "../../components/win-matches-tab/win-matches-tab";
import { LoseMatchesTab } from "../../components/lose-matches-tab/lose-matches-tab";
import { DrawMatchesTab } from "../../components/draw-matches-tab/draw-matches-tab";


@IonicPage()
@Component({
  selector: 'page-historical-results-page',
  templateUrl: 'historical-results-page.html',
})
export class HistoricalResultsPage implements OnInit {
  tab1: any;
  tab2: any;
  tab3:any;

  ngOnInit(): void {

  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = WinMatchesTab;
    this.tab2 = LoseMatchesTab;
    this.tab3 = DrawMatchesTab;
    
  }

  ionViewDidLoad() {

  }

}
