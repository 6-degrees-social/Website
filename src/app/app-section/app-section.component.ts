import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.scss']
})
export class AppSectionComponent implements OnInit {
  @ViewChild('appPic', {read: ElementRef}) private appPic: ElementRef;
  @ViewChild('videoDiv', {read: ElementRef}) private videoDiv: ElementRef;
  checked = false
  constructor() { }

  ngOnInit() {
    console.log(this.videoDiv.nativeElement.offsetTop)

  }

  @HostListener("window:scroll")
  onWindowScroll(){
    this.appPic.nativeElement.style.marginTop = (window.pageYOffset / 6) - 360 + "px";
    if ((window.pageYOffset - window.innerHeight) > window.innerHeight * 1.2 && this.checked === false) {
      this.videoDiv.nativeElement.src += '?&autoplay=1'
      this.checked = true
    }
  }
}
