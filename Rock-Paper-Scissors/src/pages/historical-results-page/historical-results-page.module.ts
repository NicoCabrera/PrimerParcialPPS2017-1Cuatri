import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricalResultsPage } from './historical-results-page';

@NgModule({
  declarations: [
    HistoricalResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricalResultsPage),
  ],
  exports: [
    HistoricalResultsPage
  ]
})
export class HistoricalResultsPageModule {}
