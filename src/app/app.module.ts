import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FTableModule } from "./f-table/f-table.module";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
