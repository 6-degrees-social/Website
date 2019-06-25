import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component, OnInit, HostListener, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor:'rgba(0, 0, 0, 0)',
        height: '70px',
      })),
      state('final', style({
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: '70px',
        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.5)'
      })),
      transition('initial=>final', animate('250ms')),
      transition('final=>initial', animate('400ms'))
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  currentState = 'initial';
  state = true;
  @Input() frameSections: ElementRef[];

  constructor() { }

  ngOnInit() {

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 30) {
      this.currentState = "final";
    } else {
      this.currentState = "initial";
    }    
  }
  
  scroll(num) {
    this.frameSections[num].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
