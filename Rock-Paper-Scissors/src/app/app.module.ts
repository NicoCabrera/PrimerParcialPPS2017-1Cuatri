import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about-page/about-page';
import { SignUpPage } from "../pages/sign-up-page/sign-up-page";
import { RegisteredUserPage } from "../pages/registered-user-page/registered-user-page";
import { MatchPage } from "../pages/match-page/match-page";
import { HistoricalResultsPage } from "../pages/historical-results-page/historical-results-page";

import { WinMatchesTab } from "../components/win-matches-tab/win-matches-tab";
import { DrawMatchesTab } from "../components/draw-matches-tab/draw-matches-tab";
import { LoseMatchesTab } from "../components/lose-matches-tab/lose-matches-tab";

import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth-service';
import { MatchResultPipe } from "../pipes/match-result";
import { OptionsPipe } from "../pipes/options";

export const firebaseConfig = {
  apiKey: "AIzaSyCAHVBAzEAetcrhm5vlUYPsoAL2u2PyfzM",
  authDomain: "rockpaperscissors-d189d.firebaseapp.com",
  databaseURL: "https://rockpaperscissors-d189d.firebaseio.com",
  projectId: "rockpaperscissors-d189d",
  storageBucket: "rockpaperscissors-d189d.appspot.com",
  messagingSenderId: "929387629981"
};


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AboutPage,
    SignUpPage,
    RegisteredUserPage,
    MatchPage,
    HistoricalResultsPage,
    WinMatchesTab,
    LoseMatchesTab,
    DrawMatchesTab,
    MatchResultPipe,
    OptionsPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    SignUpPage,
    RegisteredUserPage,
    MatchPage,
    HistoricalResultsPage,
    WinMatchesTab,
    LoseMatchesTab,
    DrawMatchesTab
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
