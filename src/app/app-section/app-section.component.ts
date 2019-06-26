import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.scss']
})
export class AppSectionComponent implements OnInit {
  @ViewChild('appPic', {read: ElementRef}) private appPic: ElementRef;
  getTop:number = window.innerHeight < window.innerWidth ? 1100 : 1000;
  getMultiplier = () => window.innerHeight < window.innerWidth ? 0 : (window.innerHeight / 2)
  constructor() { }

  ngOnInit() {

  }

  @HostListener("window:scroll")
  onWindowScroll(){
    this.appPic.nativeElement.style.top = ((window.innerHeight + this.getTop) - ((window.pageYOffset + (this.getMultiplier()))  / 1.3)) + "px";
  }
}
