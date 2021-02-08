import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlApiUsuario:string = environment.apiUrl + "/usuarios";

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(this.urlApiUsuario);
  }

  getusuarioById(id:string) {
    return this.http.get(this.urlApiUsuario + `/${id}`);
  }

  save(usuario: Usuario) {
    return this.http.post(this.urlApiUsuario, usuario);
  }

  update(usuario: Usuario) {
    return this.http.put(this.urlApiUsuario + `/${usuario.id}`, usuario);
  }

  delete(id: string) {
    return this.http.delete(this.urlApiUsuario + `/${id}`);
  }
}
