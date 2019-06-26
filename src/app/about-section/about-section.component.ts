import {Component, ElementRef, HostListener, OnInit, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  @ViewChild('aboutPic', {read: ElementRef}) private aboutPic: ElementRef;
  getTop:number = window.innerHeight < window.innerWidth ? 150 : 110
  getMultiplier = () => window.innerHeight < window.innerWidth ? 0 : (window.innerHeight / 2)

  constructor() { }


  ngOnInit() {

  }
  @HostListener("window:scroll")
  onWindowScroll(){
    this.aboutPic.nativeElement.style.top = ((window.innerHeight + this.getTop) - (window.pageYOffset + (this.getMultiplier()))  / 1.3) + "px";
  }
}
