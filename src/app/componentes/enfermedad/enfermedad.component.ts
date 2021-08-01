import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-enfermedad',
  templateUrl: './enfermedad.component.html',
  styleUrls: ['./enfermedad.component.scss'],
  providers: [UsuarioService]
})
export class EnfermedadComponent implements OnInit {
  public enfermedadModel: any = {nombre:'',
  descripcion: "", sintomas: ""};
  public enfermedadModel1: any = {_id: '',nombre:'',
  descripcion: "", sintomas: ""};
  public idEliminarEnfermedad: any = {id: ''}
  public enfermedadesObtenidas: any;


  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerEnfermedades(this._usuarioService.getIdentidad()._id);
  }

  obtenerEnfermedades(id: String){
    this._usuarioService.obtenerEnfermedadID(id).subscribe(
      response=>{
        this.enfermedadesObtenidas=response.enfermedadEncontrada;
        console.log(response.enfermedadEncontrada);
      },error=>{
        console.log(<any>error);
      }
    )
  }

  registrarEnfermedad(){
    this._usuarioService.registrarEnfermedad(this.enfermedadModel).subscribe(
      response=>{
        console.log(response.enfermedadguardada);
        Swal.fire('Enfermedad agregada');
        this.obtenerEnfermedades(this._usuarioService.getIdentidad()._id);
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

  editarEnfermedad(){
this._usuarioService.editarEnfermedad(this.enfermedadModel1).subscribe(
  response=>{
    console.log(response.enfermedadActualizada);
    Swal.fire('Enfermedad actualizada: ' + '\n nombre: '+response.enfermedadActualizada.nombre);
    this.obtenerEnfermedades(this._usuarioService.getIdentidad()._id);
  },
  error=>{
    console.log(<any>error)
  }
)

  }


  eliminarEnfermedad(){
    this._usuarioService.eliminarEnfermedad(this.idEliminarEnfermedad.id).subscribe(
      response=>{
        console.log(response.enfermedadEliminada);
        Swal.fire('Enfermedad eliminada');
        this.obtenerEnfermedades(this._usuarioService.getIdentidad()._id);
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

}
