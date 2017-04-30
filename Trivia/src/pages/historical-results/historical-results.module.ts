import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricalResults } from './historical-results';

@NgModule({
  declarations: [
    HistoricalResults,
  ],
  imports: [
    IonicPageModule.forChild(HistoricalResults),
  ],
  exports: [
    HistoricalResults
  ]
})
export class HistoricalResultsModule {}
