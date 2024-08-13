import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './modules/home/home.module';
import { ProyectoModule } from './modules/proyecto/proyecto.module';
import * as $ from 'jquery';
import { ContactModule } from './modules/contact/contact.module';
import { AboutComponent } from './shared/component/about/about.component';
import { NavbarService } from './shared/component/navbar/service/navbar.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProyectoModule,
    ContactModule
  ],
  exports: [
  ],
  providers: [
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
