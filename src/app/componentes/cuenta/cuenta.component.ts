import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { GLOBAL } from 'src/app/servicios/global.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss'],
  providers: [UsuarioService, ImagenService]
})
export class CuentaComponent implements OnInit {
  public token: any;
  public url: any;
  public usuarios: any;
  public idUsuarioModel: Usuario;
  public identidad;
  public id = "";
  constructor(
    public _usuarioService: UsuarioService, public _imagenService: ImagenService,
  ) {
    this.identidad = this._usuarioService.getIdentidad();
    this.idUsuarioModel = new Usuario("","","","","");
    this.token = _usuarioService.getToken();
    this.url = GLOBAL.url;
   }


  ngOnInit(): void {
    console.log(this.identidad.username)
    this.obtenerCuenta();
  }

  subirImagen(){
    this._imagenService.subirImagen(this.url + 'subirImagen', [], this.imagenASubir, this.token,
    'imagen').then((resultado: any) => {
      console.log(resultado);
      this.identidad.imagen = resultado.usuarioEncontrado.imagen;
      localStorage.setItem('identidad', JSON.stringify(this.identidad))
  })

  }
  public imagenASubir: Array<File> = [];
  inputEvento(fileInput: any){
    this.imagenASubir = <Array<File>>fileInput.target.files;
  }

  obtenerCuenta(){
    this._usuarioService.verCuenta().subscribe(
      response => {
        this.identidad = response.usuarioEncontrado;
        console.log(response.usuarioEncontrado)


      },
      error => {
        console.log(<any>error);
      }
    )
  }

  obtenerUsuarioId(_id: any){
    this.id = _id;
    this._usuarioService.obtenerUsuario(_id).subscribe(
      response=>{
        console.log(response.usuarioEncontrado);
        this.idUsuarioModel = response.usuarioEncontrado;

      }
    )
  }

  editarUsuario(){
    this._usuarioService.editarUsuario(this.idUsuarioModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerCuenta();
      },error=>{
        console.log(<any>error)
      }
    )
  }

  eliminarUsuario(idUsuario: any){
    this._usuarioService.eliminarUsuario(idUsuario).subscribe(
      response=>{
        console.log(response);

       localStorage.clear();
      },error=>{
        console.log(<any>error)
      }
    )
  }}
