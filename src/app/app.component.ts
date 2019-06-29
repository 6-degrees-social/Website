import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  title = 'sixdegrees-website';
  sections;

  constructor(private cdref: ChangeDetectorRef, private titleService: Title) { }

  ngOnInit(){
    this.titleService.setTitle('6 Degrees Social')
  }



  getFrames(evt) {
    this.sections = evt;
    this.cdref.detectChanges();
  }
}
