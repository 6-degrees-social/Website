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
  }

  @HostListener("window:scroll")
  onWindowScroll(){
    if (window.pageYOffset > (this.imageProperties.y - window.innerHeight)) {
      console.log(this.container.nativeElement.clientHeight)
      this.aboutPic.nativeElement.style.marginTop = ((window.pageYOffset - this.imageProperties.y) / (window.innerWidth > 768 ? 6 : 10)) + 100 + "px";
    }

  }

  @HostListener("window:resize")
  onResize() {
    this.imageProperties = this.aboutPic.nativeElement.getBoundingClientRect()
    this.imageProperties.y += window.scrollY
  }
}
