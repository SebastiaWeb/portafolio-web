import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  exports:[
    ContactoComponent
  ]
})
export class ContactModule { }
