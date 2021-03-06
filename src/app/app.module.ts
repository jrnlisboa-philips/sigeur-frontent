import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioCadComponent } from './usuario-cad/usuario-cad.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilCadComponent } from './perfil-cad/perfil-cad.component';
import { CargoListComponent } from './cargo-list/cargo-list.component';
import { CargoCadComponent } from './cargo-cad/cargo-cad.component';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioListComponent,
    UsuarioCadComponent,
    PerfilListComponent,
    PerfilCadComponent,
    CargoListComponent,
    CargoCadComponent,
    UsuarioPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
