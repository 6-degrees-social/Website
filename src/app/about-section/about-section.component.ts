import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  @HostListener("window:scroll")
  onWindowScroll(){

    document.getElementById("about-pic").style.top = ((window.innerHeight * 0.75 ) - (window.pageYOffset / 2)) + "px";

  }
}
