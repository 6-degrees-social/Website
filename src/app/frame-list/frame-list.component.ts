import {Component, ElementRef, HostListener, OnInit, ViewChild,} from '@angular/core';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.scss']
})
export class FrameListComponent implements OnInit {

  @ViewChild('appSectionWrap', {read: ElementRef}) private appSectionWrap: ElementRef;
  @ViewChild('stepsSectionWrap', {read: ElementRef}) private stepsSectionWrap: ElementRef;
  @ViewChild('instaSectionWrap', {read: ElementRef}) private instaSectionWrap: ElementRef;
  constructor() { }

  ngOnInit() {
    this.stepsSectionWrap.nativeElement.style.top = window.innerHeight * 3.22 + "px";
    this.instaSectionWrap.nativeElement.style.top = window.innerHeight * 5.17 + "px";
  }

  @HostListener("window:resize", [])
  onWindowResize() {
    this.stepsSectionWrap.nativeElement.style.top = window.innerHeight * 3.22 + "px";
    this.instaSectionWrap.nativeElement.style.top = window.innerHeight * 5.17 + "px";
  }
}
