import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Questions } from './questions';


@NgModule({
  declarations: [
    Questions,
  ],
  imports: [
    IonicPageModule.forChild(Questions),
  ],
  exports: [
    Questions
  ]
})
export class QuestionsModule {}
