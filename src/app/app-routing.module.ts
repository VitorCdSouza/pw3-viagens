import { DetalharComponent } from './detalhar/detalhar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const routes: Routes = [
  {path:'', component:ListarComponent},
  {path:'detalhes', component:DetalharComponent},
  {path:'excluir', component:ExcluirComponent},
  {path:'cadastrar', component:CadastrarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
