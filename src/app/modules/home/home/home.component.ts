import { Component, ViewChild, OnInit, AfterViewInit, EventEmitter, ElementRef, InjectionToken, Input, ChangeDetectorRef, Output } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import{ MotionPathPlugin} from 'gsap/MotionPathPlugin';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
    //Todas las clases estan definidas en el archivo style.css
    // obtenemos los elementos necesarios del DOM
    @Output() targetsHTML = new EventEmitter<boolean>();
    @ViewChild("mainletrarolx") rol: any;
    @ViewChild('mainLetraSignoRol') signoRol: any;
    @ViewChild('mainletra') mainLetra: any;
    @ViewChild('esferaAngular') esferaAngular: any;
    public menuAlto: any;

    constructor(
        
        private cdRef: ChangeDetectorRef
    ) {
        gsap.registerPlugin(MotionPathPlugin);

        // this.escribir();
    }

    obtenerHeight(event: any) {
        this.menuAlto = event
    }

    getTargetsHTML(event: any) {
        this.targetsHTML.emit(true);
    }

    ngAfterViewInit() {

        // this.cdRef.detectChanges(); 

        // Para controlar el tiempo de animacion de los objetos
        var tl = gsap.timeline()

        // Obtenemos el elemento nativo de html
        this.rol = this.rol.nativeElement;
        this.signoRol = this.signoRol.nativeElement;
        this.mainLetra = this.mainLetra.nativeElement;


        // Centramos el texto de maquina de escribir
        if (screen.width > 800) {

            this.mainLetra.style.height = "calc(99% - " + this.menuAlto + "px)";

        }
        // llamamos la funcion que tiene las otras funciones para la simulacion de una maquina de escribir
        this.escribir();

        // Efecto de las Skill
        if (screen.width > 900) {
            tl.to("#esferaHtml", { rotation: 500, opacity: 1, y: -300, duration: 3, yoyo: true, repeat: -1 });
            tl.to("#esferaCSS", { rotation: 700, opacity: 1, y: -200, x: -500, duration: 2, yoyo: true, repeat: -1 }, 2);
            tl.to("#esferaJS", { rotation: 800, opacity: 1, y: -250, x: 500,  duration: 3, yoyo: true, repeat: -1 }, 4);
            tl.to("#esferaAngular", { rotation: 500, opacity: 1, y: -490, x: 200,  duration: 3, yoyo: true, repeat: -1 }, 6);
            tl.to("#esferaNode", { rotation: 700, opacity: 1, y: -480, x: 380, z: -400,  duration: 2, yoyo: true, repeat: -1 }, 8);
            tl.to("#esferaPHP", { rotation: 600, opacity: 1, y: -400, x: -400, z: 200,  duration: 3, yoyo: true, repeat: -1 }, 10);
            tl.to("#esferaGit", { rotation: 900, opacity: 1, y: -300, x: -400,  duration: 2, yoyo: true, repeat: -1 }, 12);
        } else {
            tl.to("#esferaHtml", { rotation: 500, opacity: 1, y: -300, duration: 3, yoyo: true, repeat: -1 });
            tl.to("#esferaCSS", { rotation: 700, opacity: 1, y: -400, x: 80, duration: 2, yoyo: true, repeat: -1 }, 2);
            tl.to("#esferaJS", { rotation: 800, opacity: 1, y: -550, x: -80, duration: 5, yoyo: true, repeat: -1 }, 4);
            tl.to("#esferaAngular", { rotation: 500, opacity: 1, y: -390, x: 100,  duration: 4, yoyo: true, repeat: -1 }, 6);
            tl.to("#esferaPHP", { rotation: 600, opacity: 1, y: -400, x: -75, z: 200,  duration: 5, yoyo: true, repeat: -1 }, 10);
        }
    }

    ngOnInit() {
    }


    escribir(): void {
        let roles = ['Frontend', 'Backend', 'Web'] // Roles
        this.ponerLetra(roles, 2000, this.rol, this.signoRol); // Funcion que pone letra por letra
    }

    // Con esta funcion se busca hacer parpadear el palito de ayuda de escribir
    parpadeos($signo: any) {
        var parpadeo = true;

        setInterval(() => {
            // En cada vuelta del intervalo ponemos y quitamos las clases para hacer el efecto
            if (parpadeo) {
                $signo.classList.remove('fadeIn');
                $signo.setAttribute('class', 'fadeOut main-letra__signoRol');

                parpadeo = false;
            } else {
                $signo.classList.remove('fadeOut');
                $signo.setAttribute('class', 'fadeIn main-letra__signoRol');
                parpadeo = true;
            }

        }, 500);

    }


    // La funcion mas impotante para la simulacion de una maquina de escribir
    ponerLetra(palabras: any, velocidad: any, $element: any, signo: any) {

        let colores = ['tema-html', 'tema-js']; //Los colores predefinidos en css con ese nombre
        let numeroX = 0; // Guarda el numero aleatorio
        let key = false;
        let i = 0; // Contador del intervalo para escoger letra a letra
        let palabra = 0; // Contador de la palabra

        let text = "";
        $element.setAttribute("class", colores[numeroX]);

        // Se invoca la funcion de hacer parpadear nuestro signo
        this.parpadeos(signo);

        let aux = 0;
        // Lo guardamos en una variable el setInteval
        let inter = setInterval(() => {

            if (text.length == i) {



                // Para remover la clase del color que tenia anteriormente
                if (numeroX == 0) {
                    $element.classList.remove(colores[0]);
                } else if (numeroX == 1) {
                    $element.classList.remove(colores[1]);
                }


                // invocamos la funcion y almacenamos los numeros aleatorios en la variable
                aux = numeroX
                numeroX = this.numero(numeroX)

                while (aux == numeroX) {
                    numeroX = this.numero(numeroX)
                }

                // Agregamos la clase al elemento del DOM
                $element.setAttribute('class', colores[numeroX] + " main-letra__rol")

                // Reiniciamos el conteno con la variable 'i  a  0' y reseteamos el valor del elemento a "vacio"
                i = 0;
                $element.innerText = "";

                // Para no sobre pasar el conteo de las palabras establecidas
                if (palabra >= 3) {
                    palabra = 0;
                    text = " ";

                } else {
                    text = palabras[palabra];
                    palabra++;
                }
                // Para limpiar o detener el setInterval
                // clearInterval(inter);
            }

            // Agregamos letra a letra en el elemento del DOM
            if (key) {
                $element.innerText += text[i];

                key = false;

            } else {

                $element.innerText += text[i];

                key = true;
            }
            ++i;

        }, 1000);
    }

    // Funcion para obtener solo 3 numeros aleatorios
    numero(numeroDado: any) {
        let numero = Math.round(Math.random() * (1));
        if (numeroDado == numero) {
            if (numeroDado == 1 || numeroDado == 2) {
                return numeroDado - 1
            } else {
                return numeroDado + 1
            }
        } else {
            return numero = Math.round(Math.random() * (1));
        }
    }

}
