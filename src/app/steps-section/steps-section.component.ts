import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-steps-section',
  templateUrl: './steps-section.component.html',
  styleUrls: ['./steps-section.component.scss']
})
export class StepsSectionComponent implements OnInit {
  @ViewChild('stepsPic', {read: ElementRef}) private stepsPic: ElementRef;
  getTop:number = window.innerHeight < window.innerWidth ? 2000 : 1955;
  getMultiplier = () => window.innerHeight < window.innerWidth ? 0 : (window.innerHeight / 2)

  constructor() { }

  ngOnInit() {

  }
  @HostListener("window:scroll")
  onWindowScroll(){
    this.stepsPic.nativeElement.style.marginTop = (window.pageYOffset / 6) - 600 + "px";
  }
}
