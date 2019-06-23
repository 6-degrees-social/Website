import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-steps-section',
  templateUrl: './steps-section.component.html',
  styleUrls: ['./steps-section.component.scss']
})
export class StepsSectionComponent implements OnInit {
  @ViewChild('stepsPic', {read: ElementRef}) private stepsPic: ElementRef;
  constructor() { }

  ngOnInit() {

  }
  getTop() {
    if (window.innerWidth > 1400)
      return 2050;
    else if (window.innerWidth > 700)
      return 2100;
  }
  @HostListener("window:scroll")
  onWindowScroll(){
    this.stepsPic.nativeElement.style.top = ((window.innerHeight + 2000) - (window.pageYOffset / 1.3))  + "px";
    // if (window.pageYOffset < (window.innerHeight * 2) + 560)
    //   this.stepsPic.nativeElement.style.visibility = 'hidden'
    // else
    //   this.stepsPic.nativeElement.style.visibility = 'visible'
  }
}
