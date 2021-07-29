import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  public url: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token: any;
  public identidad: any;
  constructor(public _http: HttpClient) {
  this.url = GLOBAL.url
  }


registro(usuario: Usuario): Observable<any>{
  let params = JSON.stringify(usuario);
  return this._http.post(this.url + "registrarUsuario", params, {headers: this.headersVariable})
}

ObtenerUsuarios(): Observable<any>{
  //let headersToken = this.headersVariable.set("Authorization", this.getToken());
  return this._http.get(this.url + "obtenerUsuarios", {headers: this.headersVariable})
}

login(usuario: any, getToken:any ): Observable<any>{
  if(getToken != null){
    usuario.getToken = getToken;
  }
  let params = JSON.stringify(usuario);
  return this._http.post(this.url + "login", params , {headers: this.headersVariable});
}

editarUsuario(usuario: Usuario): Observable<any>{
  let params = JSON.stringify(usuario);
  return this._http.put(this.url + "editarUsuario/" + usuario._id, params , {headers: this.headersVariable})
}
eliminarUsuario(id: String): Observable<any>{
  return this._http.delete(this.url +"eliminarUsuario/" + id, {headers: this.headersVariable})
}

obtenerUsuario(id: String): Observable<any>{
  return this._http.post(this.url +"obtenerUsuarioID/" + id, {headers: this.headersVariable})
}
verCuenta() : Observable<any>{
  return this._http.post(this.url + 'verCuenta',{headers: this.headersVariable});
 }
 //************************************************************************************************* */
 registrarDoctor(usuario: Usuario, token: any): Observable<any>{
  let params = JSON.stringify(usuario);
  let headersToken = this.headersVariable.set("Authorization", token);
  return this._http.post(this.url + "registrarDoctor", params, {headers: headersToken})
}
ObtenerDoctores(): Observable<any>{
  let headersToken = this.headersVariable.set("Authorization", this.getToken());
  return this._http.get(this.url + "obtenerDoctores", {headers: headersToken})
}
editarDoctor(usuario: Usuario): Observable<any>{
  let params = JSON.stringify(usuario);
  let headersToken = this.headersVariable.set("Authorization", this.getToken());
  return this._http.put(this.url + "editarDoctor/" + usuario._id, params , {headers: headersToken})
}
eliminarDoctor(id: String): Observable<any>{
  return this._http.delete(this.url +"eliminarDoctor/" + id, {headers: this.headersVariable})
}

obtenerDoctor(id: String): Observable<any>{
  return this._http.get(this.url +"obtenerDoctor/" + id, {headers: this.headersVariable})
}

getIdentidad(){
  var identidad2 = JSON.parse(localStorage.getItem("identidad") ||"{}");
  if(identidad2 != "undefined"){
    this.identidad = identidad2;
  }else {
    this.identidad = null;
  }
  return this.identidad;
}
getToken(){
  var token2 = localStorage.getItem("token");
  if(token2 != "undefined"){
    this.token = token2;
  }else{
    this.token = null;
  }
  return this.token;
}

//************************************************************************************************* */

registrarEnfermedad(enfermedad: any): Observable<any>{
  let params = JSON.stringify(enfermedad);
  let headersToken = this.headersVariable.set("Authorization", this.getToken());

  return this._http.post(this.url+"registrarEnfermedad",params, {headers: headersToken});

}

obtenerEnfermedades(): Observable<any>{
  let headersToken = this.headersVariable.set("Authorization", this.getToken());
  return this._http.get(this.url+"obtenerEnfermedades", {headers: headersToken});

}

eliminarEnfermedad(id: String): Observable<any>{
  let headersToken = this.headersVariable.set("Authorization", this.getToken());

  return this._http.delete(this.url+"eliminarEnfermedad/"+id,{headers: headersToken});
}

editarEnfermedad(enfermedad: any): Observable<any>{
  let params = JSON.stringify(enfermedad);
  let headersToken = this.headersVariable.set("Authorization", this.getToken());

  return this._http.put(this.url+"editarEnfermedad/"+ enfermedad._id, params, {headers: headersToken});
}

obtenerEnfermedadID(id: String): Observable<any>{
  let headersToken = this.headersVariable.set("Authorization", this.getToken());
  return this._http.get(this.url+"obtenerEnfermedadID/"+id, {headers: headersToken});
}

}



