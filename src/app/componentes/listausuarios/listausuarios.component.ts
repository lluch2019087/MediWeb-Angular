import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.scss'],
  providers: [UsuarioService]

})
export class ListausuariosComponent implements OnInit {

  public usuariosLista: any;
  public idUSuario =  ''
  public modeloUsuario: Usuario;
  public token: string;
  constructor(
    private _usuarioService: UsuarioService,
    //private _router: Router
    )
    {
    this.token = this._usuarioService.getToken();
    this.modeloUsuario = new Usuario("","","","","");
   }

  ngOnInit(): void {
    this.ObtenerUsuarios();
  }
  registrarUsuario(){
    this._usuarioService.registro(this.modeloUsuario).subscribe(
      response=> {
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario registrado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.ObtenerUsuarios();
        //this._router.navigate(["/login"]);
      },
      error=>{
        console.log(<any>error);

        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Ups, Error al registrar',
        })
      }
    )
  }
  ObtenerUsuarios(){
    this._usuarioService.ObtenerUsuarios().subscribe(
      response => {

         this.usuariosLista = response.usuarioEncontrado
         console.log(response.usuarioEncontrado);
      },
      error => {
        console.log(<any>error);
      })
  }

  obtenerUsuario(idUSuario: any){
    this._usuarioService.obtenerUsuario(idUSuario).subscribe(
      response => {
        this.modeloUsuario = response.usuarioEncontrado
        console.log(response.usuarioEncontrado);
    })

  }
   editarUsuario(){
     this._usuarioService.editarUsuario(this.modeloUsuario  ).subscribe(
      response => {
      console.log(response);
      this.ObtenerUsuarios();

     })
   }
   eliminarUsuario(id: any){
    this._usuarioService.eliminarUsuario(id).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Haz eliminado al Usuario correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.ObtenerUsuarios();
      }
    )

   }

}

