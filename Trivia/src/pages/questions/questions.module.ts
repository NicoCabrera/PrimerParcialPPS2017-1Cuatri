import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Questions } from './questions';
import { Result } from "../result/result";


@NgModule({
  declarations: [
    Questions,
    Result
  ],
  imports: [
    IonicPageModule.forChild(Questions),
  ],
  exports: [
    Questions
  ],
  entryComponents:[
    Result
  ]
})
export class QuestionsModule {}
