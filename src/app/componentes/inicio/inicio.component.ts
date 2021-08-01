import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [UsuarioService, Router]
})
export class InicioComponent implements OnInit {
  public nombreBuscar: any = {nombre: ''};
  public nombreSeleccionado: any;

  constructor(public _usuarioService: UsuarioService, private _router: Router) { }

  ngOnInit(): void {

  }
  refresh(): void { window.location.reload(); }

  buscarHotelNombre(nombre: any){
    this.nombreBuscar.nombre = nombre;

    this._usuarioService.obtenerEnfermedad(this.nombreBuscar).subscribe(
      response=>{
        console.log(response);
        this.nombreSeleccionado=response.enfermedadEncontrada;
        localStorage.setItem("nombreSeleccionado",JSON.stringify(this.nombreSeleccionado));
        this._router.navigate(['/enfermedadEncontrada']);
      },
      error=>{
        console.log(<any>error);

      }
    )
  }

}
