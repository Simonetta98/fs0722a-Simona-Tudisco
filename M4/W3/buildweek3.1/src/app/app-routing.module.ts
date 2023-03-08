import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { CreaNuovoComponent } from './components/crea-nuovo/crea-nuovo.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dettagli/:id',
    component: DettagliComponent,
  },
  {
    path: 'modifica/:id',
    component: ModificaComponent,
  },
  {
    path: 'nuovoPost',
    component: CreaNuovoComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
