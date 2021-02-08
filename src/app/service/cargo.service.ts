import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../interface/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  urlApiCargo:string = environment.apiUrl + "/cargos/";

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(this.urlApiCargo);
  }

  getCargoById(id?:string) {
    return this.http.get(this.urlApiCargo + `${id}`);
  }

  save(cargo: Cargo) {
    return this.http.post(this.urlApiCargo, cargo);
  }

  update(cargo: Cargo) {
    return this.http.put(this.urlApiCargo + `${cargo.id}`, cargo);
  }

  delete(id?: string) {
    return this.http.delete(this.urlApiCargo + `${id}`);
  }
}
