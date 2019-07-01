import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-steps-section',
  templateUrl: './steps-section.component.html',
  styleUrls: ['./steps-section.component.scss']
})
export class StepsSectionComponent implements OnInit {
  @ViewChild('stepsPic', {read: ElementRef}) private stepsPic: ElementRef;
  @ViewChild('container', {read: ElementRef}) private container: ElementRef;
  imageProperties = undefined;
  constructor() { }

  ngOnInit() {
    this.imageProperties = this.container.nativeElement.getBoundingClientRect()
  }
  @HostListener("window:scroll")
  onWindowScroll(){
    if (window.pageYOffset > (this.imageProperties.y - window.innerHeight))
      this.stepsPic.nativeElement.style.top = ((window.pageYOffset - this.imageProperties.y) / (window.innerWidth > 768 ? 6 : 10)) + (this.container.nativeElement.clientHeight - 150) + "px";
  }
  @HostListener("window:resize")
  onResize() {
    this.imageProperties = this.container.nativeElement.getBoundingClientRect()
    this.imageProperties.y += window.scrollY
  }
}
