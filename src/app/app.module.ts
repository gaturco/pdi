import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { ComoMeVejoComponent } from './como-me-vejo/como-me-vejo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FeedbackComponent } from './feedback/feedback.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MomentoCarreiraComponent } from './momento-carreira/momento-carreira.component';
import { PassosComponent } from './passos/passos.component';
import { PlanoAcaoComponent } from './plano-acao/plano-acao.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ObjetivosComponent,
    ComoMeVejoComponent,
    FeedbackComponent,
    HomeComponent,
    MomentoCarreiraComponent,
    PassosComponent,
    PlanoAcaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
