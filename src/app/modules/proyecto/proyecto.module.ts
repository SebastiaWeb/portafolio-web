import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ProyectoService } from './services/proyecto.service';



@NgModule({
  declarations: [
    ProyectoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProyectoService
  ]
  ,
  exports: [
    ProyectoComponent
  ]
})
export class ProyectoModule { }
