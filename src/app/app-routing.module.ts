import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { ComoMeVejoComponent } from './como-me-vejo/como-me-vejo.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MomentoCarreiraComponent } from './momento-carreira/momento-carreira.component';
import { PassosComponent } from './passos/passos.component';
import { PlanoAcaoComponent } from './plano-acao/plano-acao.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'home' } },
  { path: 'objetivos', component: ObjetivosComponent, data: { animation: 'objetivos' } },
  { path: 'comomevejo', component: ComoMeVejoComponent, data: { animation: 'comomevejo' } },
  { path: 'feedbacks', component: FeedbackComponent, data: { animation: 'feedbacks' } },
  { path: 'momento-carreira', component: MomentoCarreiraComponent, data: { animation: 'momento-carreira' } },
  { path: 'passos', component: PassosComponent, data: { animation: 'passos' } },
  { path: 'plano-acao', component: PlanoAcaoComponent, data: { animation: 'plano-acao' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
