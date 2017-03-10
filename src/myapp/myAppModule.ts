import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyAppComponent }  from './myAppComponent.js';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MyAppComponent ],
  bootstrap:    [ MyAppComponent ]
})
export class MyAppModule { }
