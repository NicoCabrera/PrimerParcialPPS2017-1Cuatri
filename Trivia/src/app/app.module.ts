import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule ,AuthProviders, AuthMethods} from 'angularfire2';

import { MyApp } from './app.component';
import { Questions } from "../pages/questions/questions";
import { LoginModule } from "../pages/login/login.module";


export const firebaseConfig = {
  apiKey: "AIzaSyCDJ2a9_c_HR4D4jWIFH0ANkLtiOrrF08w",
  authDomain: "triviamd.firebaseapp.com",
  databaseURL: "https://triviamd.firebaseio.com",
  projectId: "triviamd",
  storageBucket: "triviamd.appspot.com",
  messagingSenderId: "87703710834"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    MyApp,
    Questions
  ],
  imports: [
    LoginModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Questions
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
