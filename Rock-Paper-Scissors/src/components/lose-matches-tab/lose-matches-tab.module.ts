import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoseMatchesTab } from './lose-matches-tab';

@NgModule({
  declarations: [
    LoseMatchesTab,
  ],
  imports: [
    IonicPageModule.forChild(LoseMatchesTab),
  ],
  exports: [
    LoseMatchesTab
  ]
})
export class LoseMatchesTabModule {}
