import { EnfermedadEncontradaComponent } from './componentes/enfermedad-encontrada/enfermedad-encontrada.component';
import { EnfermedadComponent } from './componentes/enfermedad/enfermedad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminprincipalComponent } from './componentes/adminprincipal/adminprincipal.component';
import { CuentaComponent } from './componentes/cuenta/cuenta.component';
import { DoctorComponent } from './componentes/doctor/doctor.component';
import { EnfermedadesComponent } from './componentes/enfermedades/enfermedades.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListausuariosComponent } from './componentes/listausuarios/listausuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { DoctorprincipalComponent } from './componentes/doctorprincipal/doctorprincipal.component';

const routes: Routes = [
  {path: "principal", component: PrincipalComponent},
  {path: "inicio", component: InicioComponent},
  {path: "login", component: LoginComponent},
  {path: "registrar", component: RegistrarComponent},
  {path: "cuenta", component: CuentaComponent},
  {path: "doctor", component: DoctorComponent},
  {path: "enfermedades", component: EnfermedadesComponent},
  {path: "adminprincipal", component: AdminprincipalComponent},
  {path: "listausuarios", component: ListausuariosComponent},
  {path: "adminDoctor", component: EnfermedadComponent},
  {path: "enfermedadEncontrada", component: EnfermedadEncontradaComponent},
  {path: "doctorprincipal", component: DoctorprincipalComponent},
  {path: "**", component: PrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
