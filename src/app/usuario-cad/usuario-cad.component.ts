import { CargoService } from './../service/cargo.service';
import { Observable } from 'rxjs';
import { UsuarioService } from './../service/usuario.service';
import { Usuario } from './../interface/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cargo } from '../interface/cargo';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-usuario-cad',
  templateUrl: './usuario-cad.component.html',
  styleUrls: ['./usuario-cad.component.scss']
})
export class UsuarioCadComponent implements OnInit {
  usuario: Usuario = {};
  cargoUsuario: Cargo = {};
  idUsuario?: string;

  cargosList: Observable<Cargo[]> = new Observable();

  constructor(
    private router: Router,
    private usuarioSrv: UsuarioService,
    private cargoSrv: CargoService,
    private actRouter: ActivatedRoute,
    private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.idUsuario = this.actRouter.snapshot.params['id'];

    this.cargosList = this.cargoSrv.list();
    if (this.idUsuario) {
      this.usuarioSrv
        .getUsuarioById(this.idUsuario)
        .subscribe((usuario: Usuario) =>{
          this.usuario = usuario;
          console.log(usuario);
        });
    } else {
      this.usuario.cargo = {};
    }
  }

  save() {
    if(this.usuario.cargo?.id == "0"){
      alert('Informe o Cargo');
      return;
    }
    this.usuario.dataCriacao = this.getDateFormated();
    console.log(this.usuario);
    if (!this.idUsuario) {
      this.usuarioSrv.save(this.usuario).subscribe((resp: any) => {
        alert(`Usuario ${resp.nome} salvo com sucesso!`);
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.usuarioSrv.update(this.usuario).subscribe((resp: any) => {
        alert(`Usuario ${resp.nome} salvo com sucesso!`);
        this.router.navigate(['/usuarios']);
      });
    }
  }

  getDateFormated(): any {
    const date = new Date();
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
