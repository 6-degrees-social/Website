import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.scss']
})
export class FrameListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("appSection").style.top = window.innerHeight * 1.3  + "px"
  }

}
