import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { PerfilService } from '../service/perfil.service';
import { Perfil } from '../interface/perfil';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss']
})
export class UsuarioPerfilComponent implements OnInit {

  usuario: Usuario = {};
  idUsuario:string = "0";
  response?:boolean;
  msgResponse?: string;
  perfis: Observable<Perfil[]> = new Observable();
  usuarioPerfil:any = {idUsuario:0, idPerfil:0}

  constructor(private router: Router,
              private usuarioSrv: UsuarioService,
              private perfilSrv: PerfilService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUsuario = this.activatedRoute.snapshot.params['id'];
    this.usuarioPerfil.idUsuario = this.idUsuario;
    this.getUsuario(this.idUsuario);

    this.perfis = this.perfilSrv.list();
  }

  getUsuario(id:string) {
    this.usuarioSrv.getUsuarioById(id).subscribe(
      usuario => this.usuario = usuario
    );
  }

  editUsuario(id?:string) {
    this.router.navigate(['/','usuarios','edit',id]);
  }
  perfisUsuario(id?: string) {
    this.router.navigate(['/','usuarios','perfis',id]);
  }

  deletePerfilUsuario(id?:string) {
    this.usuarioSrv.deletePerfilUsuario(id, this.usuario.id).subscribe(
      (resp:any) => {
        this.response = resp.deleted;
        this.msgResponse = "Perfil do Usuario excluído com sucesso!";
        this.getUsuario(this.idUsuario);
      }
    );
  }

  inserirPerfilUsuario(){
     this.perfis.subscribe(
      perfil => {
      this.usuario.perfils = perfil.filter(perfilF => perfilF.id == this.usuarioPerfil.idPerfil);
      this.usuarioSrv.savePerfilUsuario(this.usuario).subscribe(
        () => this.getUsuario(this.idUsuario)
      );
    });
  }
}
