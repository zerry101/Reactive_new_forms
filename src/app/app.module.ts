import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ObserverComponent } from './observer/observer.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';
import { AngularLifecycleHooksComponent } from './angular-lifecycle-hooks/angular-lifecycle-hooks.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    FormBuilderComponent,
    ObserverComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    AngularLifecycleHooksComponent
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
