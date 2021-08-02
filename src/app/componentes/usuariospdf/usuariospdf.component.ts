import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-usuariospdf',
  templateUrl: './usuariospdf.component.html',
  styleUrls: ['./usuariospdf.component.scss'],
  providers: [UsuarioService]

})
export class UsuariospdfComponent implements OnInit {

  public usuariosLista: any;
  public idUSuario =  ''
  public modeloUsuario: Usuario;
  public token: string;
  constructor(
    private _usuarioService: UsuarioService,
    //private _router: Router
    )
  {this.downloadPDF();
  }

  public downloadPDF() {
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }

  ngOnInit(): void {
    this.ObtenerUsuarios();

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
}
