import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', './about.responsive.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit{

  @ViewChild('containerAbout') container:any;

  constructor() { 
    gsap.registerPlugin(ScrollTrigger);
  }  

  ngAfterViewInit(){
    this.container = this.container.nativeElement;
    // this.configScrolltrigger(this.container);
  }


  configScrolltrigger(about:any){
    ScrollTrigger.create({
      trigger: about,
      toggleClass: 'active',
      start: "top 90%",
      end: "top 20%",
      markers: false
    });
  }

  ngOnInit(): void {
  }

}
