import {Component, ElementRef, HostListener, OnInit, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit,AfterViewInit {
  @ViewChild('aboutPic', {read: ElementRef}) private aboutPic: ElementRef;
  @ViewChild('container', {read: ElementRef}) private HeadingContainer: ElementRef;
  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    //this.HeadingContainer.nativeElement.style.height = (window.innerHeight * 0.5) + 'px';
    //console.log(this.HeadingContainer.nativeElement)
  }
  @HostListener("window:scroll")
  onWindowScroll(){
    // console.log(this.HeadingContainer.nativeElement.style.height)
    this.aboutPic.nativeElement.style.top = ((window.innerHeight * 0.75 ) - (window.pageYOffset / 2)) + "px";
  }
}
