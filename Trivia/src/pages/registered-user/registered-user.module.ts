import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisteredUser } from './registered-user';


@NgModule({
  declarations: [
    RegisteredUser,
  ],
  imports: [
    IonicPageModule.forChild(RegisteredUser),
  ],
  exports: [
    RegisteredUser
  ]
})
export class RegisteredUserModule {}
