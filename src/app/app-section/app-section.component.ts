import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.scss']
})
export class AppSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("app").style.top = ((window.innerHeight ) - (window.pageYOffset / 2)) + "px";
  }

}
