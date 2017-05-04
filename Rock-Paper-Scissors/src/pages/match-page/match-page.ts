import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Options, MatchResult, Game } from "../../app/entities/game";
import { AngularFire } from "angularfire2";
import { Match } from "../../app/entities/match";


@IonicPage()
@Component({
  selector: 'page-match-page',
  templateUrl: 'match-page.html',
})
export class MatchPage {
  myOptions = Options;
  userChosenOption: Options;
  computerRandomOption: Options;
  disabledControl: boolean;
  match: Match;
  winCounter:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire) {
    this.userChosenOption = Options.Scissor;
    this.disabledControl = false;
    this.match = new Match();
    this.winCounter = 0;
  }

  ionViewDidLoad() {
    
    this.match.username = this.navParams.get("username");
    console.log(this.match.username);
  }

  playMatch() {
    this.disabledControl = !this.disabledControl;
    setTimeout(() => {
      this.computerRandomOption = Math.floor(Math.random() * 3);
      this.showMatchResult();
    }, 2000)
  }

  setUserChosenOption(option) {
    this.userChosenOption = option;
  }


  showMatchResult() {
    let result = this.getMatchResult();
    switch (result) {
      case MatchResult.Lose:
        console.log("Perdiste");
        this.winCounter--;
        break;
      case MatchResult.Win:
        console.log("Ganaste");
        this.winCounter++;
        break;
      case MatchResult.Draw:
        console.log("Empate");
        break;
      default:
        break;
    }

    console.log("EL usuario elige: " +
      Options[this.userChosenOption] +
      ". La máquina elige: " +
      Options[this.computerRandomOption] +
      ". Resultado: " + MatchResult[result]);

    this.saveGame(result);

    this.disabledControl = !this.disabledControl;
  }


  saveGame(result) {
    let game: Game = new Game();
    game.computerRandomOption = this.computerRandomOption;
    game.userChosenOption = this.userChosenOption;
    game.result = result;
    this.match.games.push(game);

    if (this.match.games.length === 4) {
      let date = new Date();
      this.match.date = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
      this.setMatchResultValue();
      console.log("Fin del Juego");

      let db = "";
      if(this.winCounter > 0){
        console.log("Juego ganado");
        db = "winmatches";
      }
      else if(this.winCounter < 0){
        console.log("Juego perdido");
        db = "losematches";
      }
      else{
        db = "drawmatches";
        console.log("Juego empatado");
      }
        

      console.log(this.match);
      this.af.database.list(db)
        .push(this.match)
        .catch((error) => console.log(error));

    }

  }


  setMatchResultValue() {
  }

  getMatchResult(): MatchResult {
    let rv: MatchResult;

    if (this.computerRandomOption === this.userChosenOption) {
      rv = MatchResult.Draw;
    }
    else {
      switch (this.computerRandomOption) {
        case Options.Rock:
          rv = this.userChosenOption === Options.Paper ? MatchResult.Win : MatchResult.Lose;
          break;
        case Options.Paper:
          rv = this.userChosenOption === Options.Scissor ? MatchResult.Win : MatchResult.Lose;
          break;
        case Options.Scissor:
          rv = this.userChosenOption === Options.Rock ? MatchResult.Win : MatchResult.Lose;
          break;
        default:
          break;
      }
    }
    return rv;
  }
}


