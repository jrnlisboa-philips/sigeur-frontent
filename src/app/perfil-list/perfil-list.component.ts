import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../service/perfil.service';
import { Observable } from 'rxjs';
import { Perfil } from '../interface/perfil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.scss']
})
export class PerfilListComponent implements OnInit {

  perfilsList: Observable<Perfil[]> = new Observable();
  response?:boolean;
  msgResponse?: string;

  constructor(private router: Router,
              private perfilSrv: PerfilService) { }

  ngOnInit(): void {
    this.getListperfils();
  }

  getListperfils() {
    this.perfilsList = this.perfilSrv.list();
  }

  editPerfil(id?:string) {
    this.router.navigate(['/','perfis','edit',id])
  }

  deletePerfil(id?:string) {
    this.perfilSrv.delete(id).subscribe(
      (resp:any) => {
        this.response = resp.deleted;
        this.msgResponse = "Perfil excluído com sucesso!";
        this.getListperfils();
      }
    )
  }

}
