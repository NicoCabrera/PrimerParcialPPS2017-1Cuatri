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
  winCounter: number;
  imageForUserBySelectedOption: string;
  imageForComputerByRandomOption: string;
  hideContinueButton: boolean;
  wins:number;
  losses:number;
  hideFinalResult:boolean;
  resultMessage:string;
  numberOfMatch:number;
  disabledContinueButton:boolean;
  finalResultMessage:string;
  disabledReadyButton:boolean;
  hideReadyButton:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire) {
    this.userChosenOption = Options.Scissor;
    this.disabledControl = false;
    this.match = new Match();
    this.winCounter = 0;
    this.imageForUserBySelectedOption = "assets/img/unknow.png";
    this.imageForComputerByRandomOption = "assets/img/unknow.png";
    this.hideContinueButton = true;
    this.wins = 0;
    this.losses = 0;
    this.hideFinalResult= true;
    this.resultMessage = "";
    this.numberOfMatch = 1;
    this.disabledContinueButton = false;
    this.finalResultMessage = "";
    this.hideReadyButton = true;
  }

  ionViewDidLoad() {

    this.match.username = this.navParams.get("username");
    console.log(this.match.username);
  }

  continueMatch() {
    this.hideContinueButton = !this.hideContinueButton;
    this.numberOfMatch++;
    this.setDefaultImages();
  }

  setDefaultImages() {
    let path = "assets/img/unknow.png";
    this.imageForComputerByRandomOption = path;
    this.imageForUserBySelectedOption = path;
    this.disabledReadyButton = true;
    this.hideReadyButton = true;
  }
  playMatch() {
    this.disabledControl = !this.disabledControl;
    setTimeout(() => {
      this.computerRandomOption = Math.floor(Math.random() * 3);
      this.imageForComputerByRandomOption = this.setImageBySelectedOption(this.computerRandomOption);
      this.hideContinueButton = !this.hideContinueButton;
      this.showMatchResult();
      
    }, 2000)
  }

  setUserChosenOption(option) {
    this.userChosenOption = option;
    this.imageForUserBySelectedOption = this.setImageBySelectedOption(option);
    this.hideReadyButton = false;
  }

  setImageBySelectedOption(option: Options) {
    let path: string = "";
    switch (option) {
      case Options.Rock:
        path = "assets/img/stone.png";
        break;
      case Options.Scissor:
        path = "assets/img/scissor.png";
        break;
      default:
        path = "assets/img/paper.png"
        break;
    }
    return path;
  }

  showMatchResult() {
    let result = this.getMatchResult();
    switch (result) {
      case MatchResult.Lose:
        this.resultMessage = "Perdiste";
        this.winCounter--;
        this.losses++;
        break;
      case MatchResult.Win:
        this.resultMessage = "Ganaste";
        this.winCounter++;
        this.wins++;
        break;
      case MatchResult.Draw:
        this.resultMessage = "Empate";
        break;
      default:
        break;
        
    }

    

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
      let message  =  "Fin del Juego: ";
      let db = "";
      if (this.winCounter > 0) {
        message += "Juego ganado";
        db = "winmatches";
      }
      else if (this.winCounter < 0) {
        message += "Juego perdido";
        db = "losematches";
      }
      else {
        db = "drawmatches";
        message += "Juego empatado";
      }
      this.finalResultMessage = message;
      this.hideFinalResult = !this.hideFinalResult;
      this.disabledContinueButton = true;
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


