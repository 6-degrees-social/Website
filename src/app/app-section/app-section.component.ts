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

  }

  @HostListener("window:scroll")
  onWindowScroll(){
    this.appPic.nativeElement.style.marginTop = (window.pageYOffset / 6) - 420 + "px";
  }
}
