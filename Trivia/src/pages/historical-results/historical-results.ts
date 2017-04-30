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
  matchesMock = [{
    username:"Eritso",
    results:{
      question4564:{
        text:"texto de la pregunsta uno",
        answer: "respuesrt a la prefgunata 1"
      },
      question2:{
        text:"texto de la pregunsta 2",
        answer: "respuesrt a la prefgunata 2"
      },
      question3:{
        text:"texto de la pregunsta 3",
        answer: "respuesrt a la prefgunata 3"
      },
    }
  }];

  copyData =  {
    "qwerqwerqwerqwerqwerqwer" : {
      "results" : {
        "question443654213" : {
          "answer" : "Streptococcus pyogenes",
          "text" : "¿Cuál de las siguientes bacterias es Gram Positiva?"
        },
        "questiondfasdfwer4" : {
          "answer" : "HIV",
          "text" : "¿Para cuál de los siguientes virus no existe cura?"
        },
        "questionzzzsdfas4" : {
          "answer" : "Tinea Ungeum",
          "text" : "¿Cuál de los siguentes hongos causa onicomicosis?"
        }
      },
      "username" : "EritsoGames"
    }
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,private _auth: AuthService, private appData:AppData, private af:AngularFire) {
  }

  ionViewDidLoad() {
    /*
    this.af.database.list('matches')
    .subscribe(
      data=>{
        debugger;
        this.matches = data;
        console.log(this.matches);
      })
      */
      console.log(this.matchesMock);
  }

}
