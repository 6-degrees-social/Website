import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.scss']
})
export class AppSectionComponent implements OnInit {
  @ViewChild('appPic', {read: ElementRef}) private appPic: ElementRef;
  //@ViewChild('appPic', {read: ElementRef}) private appPic: ElementRef;
  getTop:number = 1100;
  constructor() { }

  ngOnInit() {
    //if (window.innerWidth <= 768px)

  }

  @HostListener("window:scroll")
  onWindowScroll(){
    this.appPic.nativeElement.style.top = ((window.innerHeight + this.getTop) - (window.pageYOffset / 1.3)) + "px";
  }
}
