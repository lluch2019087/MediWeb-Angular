import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss'],
  providers: [UsuarioService]
})
export class ForoComponent implements OnInit {
  public preguntaModel: any = {titulo: "", pregunta: ""};
  public comentarioModel: any = {id: "", comentario: ""};
  public id: String;
  public preguntas: any;
  public preguntas2: any;
  public comentarios: any;

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarPreguntasUsuario();
    this.listarPreguntas();
  }

  listarPreguntas(){
    this._usuarioService.listarPreguntas().subscribe(
      response=>{
        this.preguntas2 = response.preguntasEncontradas;
        console.log(response.preguntasEncontradas);
    },error=>{
      console.log(<any>error)
    }
    )
  }


  crearPregunta(){
    this._usuarioService.crearPregunta(this.preguntaModel).subscribe(
      response=>{
      console.log(response.preguntaGuardada);
      Swal.fire(
        'Pregunta hecha'
      )
    },error=>{
      console.log(this.preguntaModel);
      console.log(<any>error);
    }
    )
  }

  listarPreguntasUsuario(){
    this._usuarioService.listarPreguntasUsuario().subscribe(
      response=>{
        this.preguntas = response.preguntasEncontradas;
    },error=>{
      console.log(<any>error)
    }
    )
  }

  editarPregunta(){
    this._usuarioService.editarPregunta(this.preguntaModel, this.id).subscribe(
      response=>{
        this.preguntas = response.preguntaActualizada;
        console.log(response.preguntaActualizada);
        Swal.fire(
          'Pregunta editada'
        )
    },error=>{
      console.log(<any>error)
    }
    )

  }

  eliminarPregunta(){
    this._usuarioService.eliminarPregunta(this.id).subscribe(
      response=>{
        this.preguntas = response.preguntaEliminada;
        console.log(response.preguntaEliminada);
        Swal.fire(
          'Pregunta eliminada'
        )
    },error=>{
      console.log(<any>error)
    }
    )

  }

  agregarComenarioDoc(){
    this._usuarioService.agregarComentarioDoc(this.comentarioModel).subscribe(
      response=>{
        this.comentarios = response.pregunta;
        console.log(response.pregunta);
        Swal.fire(
          'Respondió a esta pregunta'
        )
    },error=>{
      console.log(<any>error);
      console.log(this.comentarioModel)
    }
    )

  }

}
