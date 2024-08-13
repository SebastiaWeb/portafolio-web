import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css', 'contacto.responsive.component.css']
})
export class ContactoComponent implements OnInit, AfterViewInit {

  @ViewChild('contactoContainer') contactoContainer:any;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.contactoContainer = this.contactoContainer.nativeElement;
 
  }


  goLinkedin(){
    window.open("https://www.linkedin.com/in/sebastiancarmonpuello/", '_blank');
  }
  goGithub(){
    window.open('https://github.com/SebastiaWeb', '_blank');
  }

}
