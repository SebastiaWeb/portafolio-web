import { Component, OnInit, ViewChild, AfterViewInit,  QueryList, ViewChildren } from '@angular/core';
import { ProyectoService } from '../services/proyecto.service';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css', './proyecto.responsive.component.css']
})
export class ProyectoComponent implements AfterViewInit, OnInit {

  public proyectosData: any;
  public rutaProyectoImg: string;
  public imgExtension: string = ".png";
  public proyectoContenido: boolean = false;

  @ViewChildren('revealTitulo') revealTitulo: QueryList<HTMLHtmlElement>;
  @ViewChildren('revealDescripcion') revealDescripcion: QueryList<HTMLParagraphElement>;
  @ViewChildren('proyectoImg') imgProyect: QueryList<HTMLImageElement>;
  // @ViewChild('proyectoUno') numero: any;

  constructor(
    public _proyecto: ProyectoService = new ProyectoService()
  ) {
    this.proyectosData = this._proyecto.proyectos;
    this.rutaProyectoImg = this._proyecto.ruta;
    this.proyectoContenido = true;
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let tituloList = this.revealTitulo.toArray();
    let descripcionList = this.revealDescripcion.toArray();
    let imgList = this.imgProyect.toArray();
    // console.log(this.numero.nativeElement);

    // PROYECTO 2

    let titulos = this.nativeElementTo(tituloList)
    let descripciones = this.nativeElementTo(descripcionList)
    let imgs = this.nativeElementTo(imgList)

    
    this.configScrolltrigger(titulos, descripciones, imgs);

  }

  goProyecto(link:any){
    window.open(link, '_blank');
  }

  configScrolltrigger(titulos: any, descripciones: any, imgs: any) {

    titulos.forEach((titulo:any, i:number) => {
      ScrollTrigger.create({
        trigger: titulo,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%",
        // markers: true
      });
    });

    descripciones.forEach((descripcion:any, i:number) => {
      ScrollTrigger.create({
        trigger: descripcion,
        toggleClass: 'active',
        start: "top 100%",
        end: "top 0%",
        // markers: true
      });
    });
    
    imgs.forEach((img:any, i:number) => {
      ScrollTrigger.create({
        trigger: img,
        toggleClass: 'active',
        start: "top 100%",
        end: "top 0%",
        // markers: true
      });
    });
  }

  nativeElementTo(htmlList:any) {
    let elementHTML:any = [];
    let i = 0;
    htmlList.forEach((element:any) => {
      elementHTML[i] = element.nativeElement;
      i++;
    });

    return elementHTML;
  }

}
