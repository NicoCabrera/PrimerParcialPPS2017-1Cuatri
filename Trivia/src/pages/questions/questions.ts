import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Question } from "../../app/entities/question";
import { Answer } from "../../app/entities/answer";
import { AngularFire, FirebaseListObservable } from "angularfire2";
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
export class Questions implements OnInit {

  question: Question;
  questions: Question[];
  answers: Array<Answer>;
  isDisabled: boolean;
  showWrongAnswerMessage: boolean;
  showRightAnswerMessage: boolean;

  ngOnInit(): void {
    this.af.database.list("questions")
      .subscribe(
      questions => {
        this.questions = questions;
        this.setQuestionData();
      });
  }

  setQuestionData() {
    if (this.questions.length != 0) {
      this.question = this.questions.pop();
      this.answers = [];
      for (let x in this.question.answers)
        this.answers.push(this.question.answers[x])
    }else{
      console.log("No hay más preguntas.");
    }

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private zone: NgZone, private af: AngularFire) {
    this.isDisabled = false;
    this.showWrongAnswerMessage = false;
    this.showRightAnswerMessage = false;
    this.question = new Question("");
    this.answers = [];
  }

  ionViewDidLoad() {

  }
  sendAnswer(answer) {
    this.isDisabled = !this.isDisabled;
    if (answer.isRight)
      this.showRightAnswerMessage = true;
    else
      this.showWrongAnswerMessage = true;
    setTimeout(() => {
      this.isDisabled = false;
      this.showWrongAnswerMessage = false;
      this.showRightAnswerMessage = false;
      this.setQuestionData();
    },3000);
  }

}

