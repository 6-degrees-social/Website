import { state, trigger, style, transition, animate } from '@angular/animations';
import { element } from 'protractor';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

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
  constructor(public el: ElementRef) { }

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
}
