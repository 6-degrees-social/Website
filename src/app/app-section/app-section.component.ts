import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.scss']
})
export class AppSectionComponent implements OnInit {
  @ViewChild('appPic', {read: ElementRef}) private appPic: ElementRef;
  constructor() { }

  ngOnInit() {
    this.appPic.nativeElement.style.marginTop = (window.innerHeight * 0.6) + 'px';
  }

  @HostListener("window:scroll")
  onWindowScroll(){
    this.appPic.nativeElement.style.top = ((window.innerHeight * 0.75 ) - (window.pageYOffset / 2))  + "px";
    if (window.pageYOffset > window.innerHeight * 4)
      this.appPic.nativeElement.style.visibility = 'hidden'
    else
      this.appPic.nativeElement.style.visibility = 'visible'
  }
}
