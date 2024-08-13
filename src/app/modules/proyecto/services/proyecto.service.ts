import { Injectable } from '@angular/core';

@Injectable()
export class ProyectoService {

    public ruta: string = '../../../../assets/goku/goku-';
    public proyectos: any = [
        {
            titulo: "Prácticas maquetación con html y css.",
            descripcion: `Fue la primera pagina creada por mi, la pagina fue uno de los proyectos de un curso el cual realice poniendo en práctica los conocimientos que estaba adquiriendo. Además de maquetar la hice un responsive design de la página para llevar mis conocimiento al siguiente nivel.`,
            id: 1,
            link: "https://sebastiaweb.github.io/Page-none-Responsive/",
            numero: "#proyectoUno"
        },
        {
            titulo: "Prácticas maquetación con html y css avanzado con animaciones.",
            descripcion: `Este proyecto consiste en una página estática pero la cual cuenta con muchas animaciones haciendo uso avanzado de CSS, al realizar esta pagina para solidificar mis conocimiento tambien decidi hacerla responsive en varios dispositivos.`,
            id: 2,
            link: "http://idiotic-drink.surge.sh/",
            numero: "proyectoDos"
        },
        {
            titulo: "Simulación de tienda online.",
            descripcion: `Proyecto universitario del tercer semestre donde en compañía con un amigo se realizo este proyecto para simular una tienda online, la cual se le cargan los productos a la base de datos por medio de un programa de java para luego ser mostradas en la pagina web ademas de eso mostrando imágenes guardadas en la base de datos. Cabe resaltar que las tecnología utilizadas fueron (HTML, CSS, JS, PHP, JAVA, PhpMyAdmin, MySQL), utilizando una api de prueba de pasarela de pagos online.`,
            id: 3,
            link: "https://tecnologia-informatica-practica.000webhostapp.com/",
            numero: "proyectoTres"
        },
        {
            titulo: "Proyecto Hipertensión.",
            descripcion: `Esta página fue diseñada para resolver una serie de preguntas y su toma de presión cada mes para detectar qué tan propenso es la persona de padecer esta enfermedad. Guardando los datos en una base de datos para luego tomar esos datos y llevar un historial de la persona haciendo una gráfica, esta página también está adaptada a dispositivos móviles las tecnologías utilizadas fueron (HTML, CSS, Bootstrap, JS, PHP, PhpMyAdmin, MySQL) fue realizada en compañía con tres compañeros más de estudio trabajando con git y Github.`,
            id: 4,
            link: "https://salud-vida-hipertension.000webhostapp.com/",
            numero: "proyectoCuarto"
        }
    ]

    constructor(

    ) { }

}