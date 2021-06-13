import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeroComponent } from './hero/hero.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
