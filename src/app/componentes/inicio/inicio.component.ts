import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
=======
>>>>>>> master

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
<<<<<<< HEAD
  styleUrls: ['./inicio.component.scss'],
  providers: [UsuarioService]
=======
  styleUrls: ['./inicio.component.scss']
>>>>>>> master
})
export class InicioComponent implements OnInit {

<<<<<<< HEAD
  constructor(public _usuarioService: UsuarioService, public _router: Router) { }
=======
  constructor() { }
>>>>>>> master

  ngOnInit(): void {
    
  }
<<<<<<< HEAD


  buscarEnfermedadNombre(){

    this._usuarioService.obtenerEnfermedad(this.nombreBuscar).subscribe(
      response=>{
        console.log(response);
        this.nombreSeleccionado=response.enfermedadEncontrada;
        localStorage.setItem("nombreSeleccionado",JSON.stringify(this.nombreSeleccionado));
        this._router.navigate(['/enfermedadEncontrada']);
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'NO se encontró esa enfermedad'
        })

      }
    )
  }

=======
  refresh(): void { window.location.reload(); }
  
>>>>>>> master
}
