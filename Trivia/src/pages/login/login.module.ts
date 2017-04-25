import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RegisteredUserModule } from "../registered-user/registered-user.module";
import { AboutModule } from "../about/about.module";
import { SignUp } from "../sign-up/sign-up";


@NgModule({
  declarations: [
    LoginPage,
    SignUp
  ],
  imports: [
    RegisteredUserModule,
    AboutModule,
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage
  ],
  entryComponents:[
    SignUp
  ]
})
export class LoginModule {}
