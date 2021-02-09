import { Router, ActivatedRoute } from '@angular/router';
import { Perfil } from './../interface/perfil';
import { PerfilService } from './../service/perfil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-cad',
  templateUrl: './perfil-cad.component.html',
  styleUrls: ['./perfil-cad.component.scss'],
})
export class PerfilCadComponent implements OnInit {
  perfil: Perfil = {};
  idPerfil?: string;

  constructor(
    private router: Router,
    private perfilSrv: PerfilService,
    private actRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idPerfil = this.actRouter.snapshot.params['id'];

    if (this.idPerfil) {
      this.perfilSrv
        .getPerfilById(this.idPerfil)
        .subscribe((perfil: Perfil) => (this.perfil = perfil));
    }
  }

  save() {
    if (!this.idPerfil) {
      this.perfilSrv.save(this.perfil).subscribe((resp: any) => {
        alert(`Perfil ${resp.nome} salvo com sucesso!`);
        this.router.navigate(['/perfis']);
      });
    } else {
      this.perfilSrv.update(this.perfil).subscribe((resp: any) => {
        alert(`Perfil ${resp.nome} salvo com sucesso!`);
        this.router.navigate(['/perfis']);
      });
    }
  }
}
