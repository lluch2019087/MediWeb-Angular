import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.component.html',
  styleUrls: ['./enfermedades.component.scss'],
  providers: [UsuarioService]
})
export class EnfermedadesComponent implements OnInit {
  public enfermedades: any;

  constructor(
    private _usuarioService: UsuarioService,
  ){

  }
  ngOnInit(): void {
    this.obtenerEnfermedades();
  }

  obtenerEnfermedades(){

    this._usuarioService.obtenerEnfermedades().subscribe(
      response=>{
        this.enfermedades=response.enfermedadEncontrada;
        console.log(response.enfermedadEncontrada)
      },error=>{
        console.log(<any>error)
      }
    )}


  }


