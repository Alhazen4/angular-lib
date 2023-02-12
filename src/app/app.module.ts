import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LibComponentsModule } from 'lib-components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    LibComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
