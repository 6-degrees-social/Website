import {Component, ElementRef, HostListener, OnInit, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  @ViewChild('aboutPic', {read: ElementRef}) private aboutPic: ElementRef;
  @ViewChild('container', {read: ElementRef}) private container: ElementRef;
  imageProperties = undefined;
  constructor() { }

  ngOnInit() {
    this.imageProperties = this.aboutPic.nativeElement.getBoundingClientRect()
    this.aboutPic.nativeElement.style.top = ((window.pageYOffset - this.imageProperties.y) / (window.innerWidth > 768 ? 6 : 10) ) + (this.container.nativeElement.clientHeight - (window.innerWidth > 768 ? 100 : 150)) + "px";
  }

  @HostListener("window:scroll")
  onWindowScroll(){
    if (window.pageYOffset > (this.imageProperties.y - window.innerHeight)) {
      this.aboutPic.nativeElement.style.top = ((window.pageYOffset - this.imageProperties.y) / (window.innerWidth > 768 ? 6 : 10) ) + (this.container.nativeElement.clientHeight - (window.innerWidth > 768 ? 100 : 150)) + "px";
    }
  }

  @HostListener("window:resize")
  onResize() {
    this.imageProperties = this.aboutPic.nativeElement.getBoundingClientRect()
    this.imageProperties.y += window.scrollY
  }
}
