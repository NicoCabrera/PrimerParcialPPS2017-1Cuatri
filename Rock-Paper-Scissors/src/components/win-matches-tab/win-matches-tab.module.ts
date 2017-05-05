import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WinMatchesTab } from './win-matches-tab';

@NgModule({
  declarations: [
    WinMatchesTab,
  ],
  imports: [
    IonicPageModule.forChild(WinMatchesTab),
  ],
  exports: [
    WinMatchesTab
  ]
})
export class WinMatchesTabModule {}
