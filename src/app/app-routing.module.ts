import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CargoListComponent } from './cargo-list/cargo-list.component';
import { CargoCadComponent } from './cargo-cad/cargo-cad.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilCadComponent } from './perfil-cad/perfil-cad.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioCadComponent } from './usuario-cad/usuario-cad.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cargos', component: CargoListComponent},
  {path: 'cargos/cad', component: CargoCadComponent},
  {path: 'cargos/edit/:id', component: CargoCadComponent},
  {path: 'perfis', component: PerfilListComponent},
  {path: 'perfis/cad', component: PerfilCadComponent},
  {path: 'perfis/edit/:id', component: PerfilCadComponent},
  {path: 'usuarios', component: UsuarioListComponent},
  {path: 'usuarios/cad', component: UsuarioCadComponent},
  {path: 'usuarios/edit/:id', component: UsuarioCadComponent},
  {path: 'usuarios/perfis/:id', component: UsuarioPerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
