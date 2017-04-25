import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Question } from "../../app/entities/question";
import { Answer } from "../../app/entities/answer";
/**
 * Generated class for the Questions page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class Questions {

  question: Question;
  answers: Answer[];
  isDisabled: boolean;
  showWrongAnswerMessage: boolean;
  showRightAnswerMessage: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, private zone: NgZone) {
    this.isDisabled = false;
    this.showWrongAnswerMessage = false;
    this.showRightAnswerMessage = false;
    this.question = QUESTION;
    this.answers = DATA;
  }

  ionViewDidLoad() {

  }

  sendAnswer(answer) {
    this.isDisabled = !this.isDisabled;
    if (answer.isRight)
      this.showRightAnswerMessage = true;
    else
      this.showWrongAnswerMessage = true;
    this.getNewQuestion(this);
  }

  getNewQuestion(context:any) {
    setTimeout(function () {
      context.isDisabled = false;
      context.showWrongAnswerMessage = false;
      context.showRightAnswerMessage = false;
      context.question = QUESTION2;
      context.answers = DATA2;
    }, 3000);
  }
}

export const DATA = [
  { answerId: 53, text: "Serratia", isRight: false },
  { answerId: 543, text: "Proteus", isRight: false },
  { answerId: 62, text: "Streptococcus pyogenes", isRight: true },
  { answerId: 66, text: "Escherichia coli", isRight: false }
];
export const DATA2 = [
  { answerId: 53, text: "Rubeola" , isRight:false},
  { answerId: 543, text: "Sarampión" , isRight:false},
  { answerId: 62, text: "Hepatitis B" , isRight:false},
  { answerId: 62, text: "HIV", isRight:true },
];
export const DATA3 = [
  { answerId: 53, text: "Tinea ungeum" , isRight: false},
  { answerId: 543, text: "Tinea corporis", isRight: false },
  { answerId: 62, text: "Aspergillus" , isRight: false},
  { answerId: 62, text: "Sporothrix schenkii", isRight: false }
];

export const QUESTION = new Question("¿Cuál de las siguientes bacterias es 'Gram positiva'?");
export const QUESTION2 = new Question("¿Para cuál de los siguientes virus no existe vacuna?");
export const QUESTION3 = new Question("¿Cués de los siguiente hongos causa onicomicosis?");
