import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Question } from "../../app/entities/question";
import { Answer } from "../../app/entities/answer";
import { AngularFire } from "angularfire2";
import { Result } from "../result/result";
import { Vibration } from "@ionic-native/vibration";
import { NativeAudio } from "@ionic-native/native-audio";


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
  correctAnswers: number;
  incorrectAnswers: number;
  results;
  username:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private zone: NgZone, private af: AngularFire,private vibration:Vibration,private nativeAudio:NativeAudio) {
    this.isDisabled = false;
    this.showWrongAnswerMessage = false;
    this.showRightAnswerMessage = false;
    this.question = new Question("");
    this.answers = [];
    this.results = [];
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
  }

  ngOnInit(): void {
    this.af.database.list("questions")
      .subscribe(
      questions => {
        this.questions = questions;
        this.setQuestionData();
      });
    this.nativeAudio.preloadSimple("correct","assets/sound/correctSound.mp3");
    this.nativeAudio.preloadSimple("error","assets/sound/errorSound.mp3");
  }

  setQuestionData() {
    if (this.questions.length != 0) {
      this.question = this.questions.pop();
      this.answers = [];
      for (let x in this.question.answers)
        this.answers.push(this.question.answers[x])
    } else {
      this.continueToResultPage();
    }

  }

  sendAnswer(answer) {
    this.isDisabled = !this.isDisabled;
    if (answer.isRight) {
      this.showRightAnswerMessage = true;
      this.vibrateOnce();
      this.correctAnswers++;
    }
    else {
      this.showWrongAnswerMessage = true;
      this.vibrateTwice();
      this.incorrectAnswers++;
    }
    this.results.push({
      answer: answer.text,
      text: this.question.text
    });

    setTimeout(() => {
      this.isDisabled = false;
      this.showWrongAnswerMessage = false;
      this.showRightAnswerMessage = false;
      this.setQuestionData();
    }, 3000);
  }

  continueToResultPage() {
    this.navCtrl.push(Result, {results:this.results, correctAnswers: this.correctAnswers, incorrectAnswers: this.incorrectAnswers, username:this.username});
  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");
  }

  vibrateOnce(){
    this.vibration.vibrate(1000);
    this.nativeAudio.play("correct").catch();
  }

  vibrateTwice(){
    this.vibration.vibrate([1000,1000,1000]);
    this.nativeAudio.play("error").catch();
  }
}

