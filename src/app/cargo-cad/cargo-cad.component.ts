import { Component, OnInit } from '@angular/core';
import { Cargo } from '../interface/cargo';
import { Router, ActivatedRoute } from '@angular/router';
import { CargoService } from '../service/cargo.service';

@Component({
  selector: 'app-cargo-cad',
  templateUrl: './cargo-cad.component.html',
  styleUrls: ['./cargo-cad.component.scss']
})
export class CargoCadComponent implements OnInit {

  cargo: Cargo = {};
  idCargo?:string;
  respObj: Object = {response: false, msgResponse: ''};

  constructor(private router: Router,
              private cargoSrv: CargoService,
              private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCargo = this.actRouter.snapshot.params['id'];

    if(this.idCargo) {
      this.cargoSrv.getCargoById(this.idCargo).subscribe (
        (cargo: Cargo) => this.cargo = cargo
      );
    }
  }

  save() {
    if(!this.idCargo) {
      this.cargoSrv.save(this.cargo).subscribe(
        (resp:any) => {
          alert(`Cargo ${resp.nome} salvo com sucesso!` )
          this.router.navigate(['/cargos']);
        }
      );
    } else {
      this.cargoSrv.update(this.cargo).subscribe(
        (resp:any) => {
          alert(`Cargo ${resp.nome} salvo com sucesso!` )
          this.router.navigate(['/cargos']);
        }
      );
    }
  }

}
