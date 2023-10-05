import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SapoAzulComponent } from './components/Animais/sapo-azul/sapo-azul.component';
import { HomeComponent } from './components/home/home.component';
import { DragaoDeKomodoComponent } from './components/Animais/dragao-de-komodo/dragao-de-komodo.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Animais', component:DragaoDeKomodoComponent},
  {path:'Animais/sapo', component:SapoAzulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
