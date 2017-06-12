import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../providers/auth';
import { Home } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyB2PxOxkx_Zd-PZZ5pH2Tp06KrynqNC0D0",
  authDomain: "ionic2-angularfireauth.firebaseapp.com",
  databaseURL: "https://ionic2-angularfireauth.firebaseio.com",
  projectId: "ionic2-angularfireauth",
  storageBucket: "ionic2-angularfireauth.appspot.com",
  messagingSenderId: "801703020527"
};

@NgModule({
  declarations: [
    MyApp,
    Home
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplashScreen,
    StatusBar, 
    AuthProvider
  ]
})
export class AppModule {}
