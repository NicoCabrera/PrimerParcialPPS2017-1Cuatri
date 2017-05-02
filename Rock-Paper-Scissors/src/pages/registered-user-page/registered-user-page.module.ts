import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisteredUserPage } from './registered-user-page';

@NgModule({
  declarations: [
    RegisteredUserPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisteredUserPage),
  ],
  exports: [
    RegisteredUserPage
  ]
})
export class RegisteredUserPageModule {}
