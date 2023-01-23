import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ObserverComponent } from './observer/observer.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    FormBuilderComponent,
    ObserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
