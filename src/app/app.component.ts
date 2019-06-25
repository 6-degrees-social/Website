import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  title = 'sixdegrees-website';
  sections;

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(){
  }

  getFrames(evt) {
    this.sections = evt;
    this.cdref.detectChanges();
  }
}