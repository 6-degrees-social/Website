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
    this.stepsPic.nativeElement.style.marginTop = (window.innerHeight * 1.7) + 'px';
  }
  @HostListener("window:scroll")
  onWindowScroll(){
    this.stepsPic.nativeElement.style.top = ((window.innerHeight * 0.75 ) - (window.pageYOffset / 2))  + "px";
  }
}
