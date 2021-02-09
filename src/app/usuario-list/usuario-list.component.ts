import { UsuarioService } from './../service/usuario.service';
import { Usuario } from './../interface/usuario';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  usuariosList: Observable<Usuario[]> = new Observable();
  response?:boolean;
  msgResponse?: string;

  constructor(private router: Router,
              private usuarioSrv: UsuarioService) { }

  ngOnInit(): void {
    this.getListusuarios();
  }

  getListusuarios() {
    this.usuariosList = this.usuarioSrv.list();
    this.usuariosList.subscribe(
      resp => console.log(resp)
    )
  }

  editUsuario(id?:string) {
    this.router.navigate(['/','usuarios','edit',id]);
  }
  perfisUsuario(id?: string) {
    this.router.navigate(['/','usuarios','perfis',id]);
  }

  deleteUsuario(id?:string) {
    this.usuarioSrv.delete(id).subscribe(
      (resp:any) => {
        this.response = resp.deleted;
        this.msgResponse = "Usuario excluído com sucesso!";
        this.getListusuarios();
      }
    );
  }

}
