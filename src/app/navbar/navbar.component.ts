import { state } from '@angular/animations';
import { element } from 'protractor';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  state = true;
  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // this.el.nativeElement.setAttribute('style','background-color: black');
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    // this.state = false;
    if (scrollPosition >= 30) {
      this.state = false
    } else {
      this.state = true
    }
    // let nav = document.getElementById('navbar navbar-expand-lg navbar-light bg-transparent fixed-top');
    
    // let element = document.getElementsByClassName("navbar navbar-expand-lg navbar-light bg-transparent fixed-top");
    
  }
}
