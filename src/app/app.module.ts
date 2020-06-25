import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { ComoMeVejoComponent } from './como-me-vejo/como-me-vejo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FeedbackComponent } from './feedback/feedback.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ObjetivosComponent,
    ComoMeVejoComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
