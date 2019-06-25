import { CommunitySectionComponent } from './../community-section/community-section.component';
import { AboutSectionComponent } from './../about-section/about-section.component';
import {Component, ElementRef, OnInit, ViewChild, Output, EventEmitter, ViewChildren} from '@angular/core';
import { InstagramSectionComponent } from '../instagram-section/instagram-section.component';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.scss']
})
export class FrameListComponent implements OnInit {
  @ViewChild(AboutSectionComponent, {read: ElementRef}) aboutSection;
  @ViewChild(InstagramSectionComponent, {read: ElementRef}) instagramSection;
  @ViewChild(CommunitySectionComponent, {read: ElementRef}) communitySection;
  @Output() frames = new EventEmitter();
  sections: ElementRef[];

  constructor() {}

  ngOnInit() {
    this.sections = [this.aboutSection, this.instagramSection, this.communitySection];
    this.frames.emit(this.sections);
  }
}
