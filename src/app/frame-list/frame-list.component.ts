import {Component, ElementRef, HostListener, OnInit, ViewChild,} from '@angular/core';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.scss']
})
export class FrameListComponent implements OnInit {

  @ViewChild('appSectionWrap', {read: ElementRef}) private appSectionWrap: ElementRef;
  constructor() { }

  ngOnInit() {
    this.appSectionWrap.nativeElement.style.top = window.innerHeight * 1.3  + "px";
  }

  @HostListener("window:resize", [])
  onWindowResize() {
    this.appSectionWrap.nativeElement.style.top = window.innerHeight * 1.3  + "px";
  }

}
