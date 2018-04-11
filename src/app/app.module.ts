import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePageModule } from '../pages/home/home.module';

import { MyApp } from './app.component';

import { RoomsProvider } from '../providers/rooms/rooms';
import {HttpModule} from "@angular/http";

import { SearchPage } from '../pages/search/search';


@NgModule({
  declarations: [
    MyApp,
    SearchPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HomePageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoomsProvider
  ]
})
export class AppModule {}
