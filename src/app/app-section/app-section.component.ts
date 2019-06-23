import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.scss']
})
export class AppSectionComponent implements OnInit {
  @ViewChild('appPic', {read: ElementRef}) private appPic: ElementRef;
  getTop:number = 1100;
  constructor() { }

  ngOnInit() {

  }

  @HostListener("window:scroll")
  onWindowScroll(){
    this.appPic.nativeElement.style.top = ((window.innerHeight + this.getTop) - (window.pageYOffset / 1.3)) + "px";
    // if (window.pageYOffset < window.innerHeight + 560)
    //   this.appPic.nativeElement.style.visibility = 'hidden'
    // else
    //   this.appPic.nativeElement.style.visibility = 'visible'
  }
}
