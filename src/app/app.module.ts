import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';




var firebaseConfig = {
    apiKey: "AIzaSyApe-8SuSOcc6da7Ak0du53HWezMsHVDug",
    authDomain: "to-do-list-a7e5e.firebaseapp.com",
    databaseURL: "https://to-do-list-a7e5e.firebaseio.com",
    projectId: "to-do-list-a7e5e",
    storageBucket: "to-do-list-a7e5e.appspot.com",
    messagingSenderId: "846705459030"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
