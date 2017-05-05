import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrawMatchesTab } from './draw-matches-tab';

@NgModule({
  declarations: [
    DrawMatchesTab,
  ],
  imports: [
    IonicPageModule.forChild(DrawMatchesTab),
  ],
  exports: [
    DrawMatchesTab
  ]
})
export class DrawMatchesTabModule {}
