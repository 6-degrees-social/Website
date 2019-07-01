import {Component, ElementRef, Host, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.scss']
})
export class AppSectionComponent implements OnInit {
  @ViewChild('appPic', {read: ElementRef}) private appPic: ElementRef;
  @ViewChild('container', {read: ElementRef}) private container: ElementRef;
  @ViewChild('videoDiv', {read: ElementRef}) private videoDiv: ElementRef;
  imageProperties = undefined;
  checked = false

  constructor() { }

  ngOnInit() {
    this.imageProperties = this.appPic.nativeElement.getBoundingClientRect()
  }

  @HostListener("window:scroll")
  onWindowScroll(){
    if (window.pageYOffset > (this.imageProperties.y - window.innerHeight))
      this.appPic.nativeElement.style.top = ((window.pageYOffset - this.imageProperties.y) / (window.innerWidth > 768 ? 6 : 10)) + (this.container.nativeElement.clientHeight - (window.innerWidth > 768 ? 100 : 0)) + "px";

    if ((window.pageYOffset - window.innerHeight) > window.innerHeight * 1.2 && this.checked === false) {
      this.videoDiv.nativeElement.src += '?&autoplay=1'
      this.checked = true
    }
  }

  @HostListener("window:resize")
  onResize() {
    this.imageProperties = this.appPic.nativeElement.getBoundingClientRect()
    this.imageProperties.y += window.scrollY
  }
}
