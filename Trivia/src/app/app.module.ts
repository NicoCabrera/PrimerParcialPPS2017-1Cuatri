import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';


import { MyApp } from './app.component';
import { Questions } from "../pages/questions/questions";
import { LoginModule } from "../pages/login/login.module";
import { Result } from "../pages/result/result";

import { AuthService } from '../providers/auth-service';

export const firebaseConfig = {
  apiKey: "AIzaSyCDJ2a9_c_HR4D4jWIFH0ANkLtiOrrF08w",
  authDomain: "triviamd.firebaseapp.com",
  databaseURL: "https://triviamd.firebaseio.com",
  projectId: "triviamd",
  storageBucket: "triviamd.appspot.com",
  messagingSenderId: "87703710834"
};



@NgModule({
  declarations: [
    MyApp,
    Questions,
    Result
  ],
  imports: [
    LoginModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Questions,
    Result
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService
  ]
})
export class AppModule { }
