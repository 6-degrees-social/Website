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
  @HostListener("window:scroll")
  onWindowScroll(){
    this.aboutPic.nativeElement.style.marginTop = (window.pageYOffset / 6) - 250 + "px";
  }
}
