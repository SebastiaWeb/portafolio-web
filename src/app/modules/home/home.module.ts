import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from 'src/app/shared/component/navbar/navbar.component';

declare var $: any;
declare var jQuery: any;


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
