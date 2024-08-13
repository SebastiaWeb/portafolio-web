import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { HomeComponent } from './modules/home/home/home.component';
import { NavbarService } from './shared/component/navbar/service/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'portafolio';

  public offsetTop: any;
  public getOffsetTop: boolean = false;
  @ViewChildren('homeTop', { read: ElementRef }) home: any;
  @ViewChild('proyectoTop', { read: ElementRef }) proyecto: any;
  @ViewChild('aboutTop', { read: ElementRef }) about: any;
  @ViewChild('contactoTop', { read: ElementRef }) contacto: any;

  constructor(
    private cdRef: ChangeDetectorRef,
    private _navbar: NavbarService
  ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.home = this.home.first.nativeElement;
    this.proyecto = this.proyecto.nativeElement;
    this.about = this.about.nativeElement;
    this.contacto = this.contacto.nativeElement;
    this.offsetTop = {
      'home': this.home,
      'proyecto': this.proyecto,
      'about': this.about,
      'contacto': this.contacto
    };
    // this._navbar.setTargetHTML(this.offsetTop);


    this.cdRef.detectChanges();
  }

  getTargetsHTML(event: any) {
    this._navbar.setOffsetTops(this.offsetTop);

  }
}
