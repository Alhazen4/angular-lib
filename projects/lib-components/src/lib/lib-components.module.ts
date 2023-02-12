import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { LibComponentsComponent } from './lib-components.component';
import { LibButtonComponent } from './lib-button/lib-button.component';
import { LibInputComponent } from './lib-input/lib-input.component';
import { LibTextComponent } from './lib-text/lib-text.component';
import { LibExpandComponent } from './lib-expand/lib-expand.component';

@NgModule({
  declarations: [
    LibComponentsComponent,
    LibButtonComponent,
    LibInputComponent,
    LibTextComponent,
    LibExpandComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    LibComponentsComponent,
    LibButtonComponent,
    LibInputComponent,
    LibTextComponent,
    LibExpandComponent
  ]
})
export class LibComponentsModule { }
