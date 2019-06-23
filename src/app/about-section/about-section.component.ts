import {Component, ElementRef, HostListener, OnInit, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  @ViewChild('aboutPic', {read: ElementRef}) private aboutPic: ElementRef;
  constructor() { }

  ngOnInit() {

  }

  getTop() {
    return 150
  }

  @HostListener("window:scroll")
  onWindowScroll(){
    this.aboutPic.nativeElement.style.top = ((window.innerHeight + this.getTop()) - (window.pageYOffset / 1.3)) + "px";
    // if (window.pageYOffset > window.innerHeight * 2.5)
    //   this.aboutPic.nativeElement.style.visibility = 'hidden'
    // else
    //   this.aboutPic.nativeElement.style.visibility = 'visible'
  }
}
