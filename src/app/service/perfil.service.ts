import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfil } from '../interface/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  urlApiPerfil:string = environment.apiUrl + "/perfils/"

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(this.urlApiPerfil);
  }

  getPerfilById(id:string) {
    return this.http.get(this.urlApiPerfil + `${id}`);
  }

  save(perfil: Perfil) {
    return this.http.post(this.urlApiPerfil, perfil);
  }

  update(perfil: Perfil) {
    return this.http.put(this.urlApiPerfil + `${perfil.id}`, perfil);
  }

  delete(id?: string) {
    return this.http.delete(this.urlApiPerfil + `${id}`);
  }
}
