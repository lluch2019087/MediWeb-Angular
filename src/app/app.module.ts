import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { CuentaComponent } from './componentes/cuenta/cuenta.component';
import { DoctorComponent } from './componentes/doctor/doctor.component';
import { EnfermedadesComponent } from './componentes/enfermedades/enfermedades.component';
import { EnfermedadComponent } from './componentes/enfermedad/enfermedad.component';
import { AdminprincipalComponent } from './componentes/adminprincipal/adminprincipal.component';
import { ListausuariosComponent } from './componentes/listausuarios/listausuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    InicioComponent,
    LoginComponent,
    RegistrarComponent,
    CuentaComponent,
    DoctorComponent,
    EnfermedadesComponent,
    EnfermedadComponent,
    AdminprincipalComponent,
    ListausuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
