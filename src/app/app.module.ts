import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './components/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DrinkersComponent } from './drinkers/drinkers.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkersComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
