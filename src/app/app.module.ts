import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePageModule } from '../pages/home/home.module';

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';

import { RoomsProvider } from '../providers/rooms/rooms';
import { HttpModule } from "@angular/http";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SearchPage } from '../pages/search/search';
import { LoginPageModule } from '../pages/login/login.module';

const firebaseConfig = {
    apiKey: "AIzaSyBSJpU8euUnJlOncarlO0IEfQ_4VyFno1w",
    authDomain: "desert-aa091.firebaseapp.com",
    databaseURL: "https://desert-aa091.firebaseio.com",
    projectId: "desert-aa091",
    storageBucket: "",
    messagingSenderId: "573217166954"
};

@NgModule({
  declarations: [
    MyApp,
    SearchPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HomePageModule,
    LoginPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoomsProvider,
    AuthProvider
  ]
})
export class AppModule {}
