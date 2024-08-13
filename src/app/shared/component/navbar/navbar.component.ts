import { Component, ViewChild, AfterViewInit, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavbarService } from './service/navbar.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbar.responsive.component.css']
})
export class NavbarComponent implements AfterViewInit, OnInit {


  private homeTargetHtml: any;
  private proyectoTargetHtml: any;
  private aboutTargetHtml: any;
  private contactoTargetHtml: any;

  @Output() targetsHTML = new EventEmitter<boolean>();
  @ViewChild('menu') menu: any;
  @Output() menuHeight = new EventEmitter<number>();
  @ViewChild('about') about: any;
  public changeMenuSlide: boolean = true;
  constructor(
    private _navbar: NavbarService
  ) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
  }

  ngOnInit() {

  }

  scrollSuave($event: any) {
    // Prevenimos la accion del DOM
    $event.preventDefault();

    // Le pedimos al padre appcomponent los target de las secciones
    this.targetsHTML.emit(true);

    // Recibimos la informacion enviada por el padre
    let targetsList = this._navbar.getOffsetTops();

    // Obtenemos el hash o href 
    let idSection = $event.target.hash;

    // Todos los hash o href validmos
    let hashTarget = ["#home", "#proyect", "#about", "#contact"];

    // Recorrmos los href
    for (var i = 0; i < 4; i++) {
      // Validamos en que posicion son iguales al que el usuario pulsa
      if (hashTarget[i] == idSection) {

        // Con la posicion ejecutamos la instruccion hasta donde bajara
        switch (i) {
          case 0:
            gsap.to(window, { duration: 1, scrollTo: { y: targetsList.home, offsetY: 0 } });
            break;
          case 1:
            gsap.to(window, { duration: 1, scrollTo: { y: targetsList.proyecto, offsetY: 120 } });
            break;
          case 2:
            // Validamos el tamaño de la pantalla
            if (screen.width > 500) {
              
              gsap.to(window, { duration: 5, scrollTo: { y: targetsList.about, offsetY: 70 } });
            } else {
             
              gsap.to(window, { duration: 5, scrollTo: { y: targetsList.about, offsetY: 220 } });
            }
            break;
          case 3:
            if(screen.width > 500){

              gsap.to(window, { duration: 7, scrollTo: { y: targetsList.contacto, offsetY: 70 } });
            }else{
              gsap.to(window, { duration: 2, scrollTo: { y: targetsList.contacto, offsetY: 70 } });
            }
            break;
        }
      }
    }


  }

  ngAfterViewInit() {
    
    this.menuHeight.emit(this.menu.nativeElement.clientHeight);

  }
  goLinkedin() {
    window.open("https://www.linkedin.com/in/sebastiancarmonpuello/", '_blank');
  }
  showMenuSlide() {

    // Cambiamos el valor de la variable changeMenuSlide, para mostrar u ocultar el menu
    if (this.changeMenuSlide) {
      gsap.fromTo(".menu-responsive", { display: "flex" }, { duration: 1.2, scaleY: 1 });
      gsap.fromTo("#barsMenu", { duration: 2 }, { yoyo: true, rotation: 180 });

      this.changeMenuSlide = false;
    } else {
      gsap.fromTo(".menu-responsive", { display: "flex" }, { duration: 1.2, scaleY: 0 });
      gsap.fromTo("#barsMenu", { duration: 2 }, { yoyo: true, rotation: 0 });
      this.changeMenuSlide = true;
    }
  }


  getMenuHeight() {
    return this.menuHeight;
  }
}
