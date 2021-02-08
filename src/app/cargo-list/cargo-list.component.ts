import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoService } from '../service/cargo.service';
import { Observable } from 'rxjs';
import { Cargo } from '../interface/cargo';

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.scss']
})
export class CargoListComponent implements OnInit {

  cargosList: Observable<Cargo[]> = new Observable();
  response?:boolean;
  msgResponse?: string;

  constructor(private router: Router,
              private cargoSrv: CargoService) { }

  ngOnInit(): void {
    this.getListcargos();
  }

  getListcargos() {
    this.cargosList = this.cargoSrv.list();
  }

  editCargo(id?:string) {
    this.router.navigate(['/','cargos','edit',id])
  }

  deleteCargo(id?:string) {
    this.cargoSrv.delete(id).subscribe(
      (resp:any) => {
        this.response = resp.deleted;
        this.msgResponse = "Cargo excluído com sucesso!";
        this.getListcargos();
      }
    )
  }

}
