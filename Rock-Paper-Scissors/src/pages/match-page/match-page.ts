import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userChosenOption = Options.Scissor;
    this.disabledControl = false;
  }

  ionViewDidLoad() {

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
        break;
      case MatchResult.Win:
        console.log("Ganaste");
        break;
      case MatchResult.Draw:
        console.log("Empate");
        break;
      default:
        break;
    }

    this.disabledControl = !this.disabledControl;

    console.log("EL usuario elige: " +
      Options[this.userChosenOption] +
      ". La máquina elige: " +
      Options[this.computerRandomOption] +
      ". Resultado: " + MatchResult[result]);
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

enum Options {
  Rock = 0,
  Paper,
  Scissor
}

enum MatchResult {
  Lose = -1,
  Draw,
  Win
}
