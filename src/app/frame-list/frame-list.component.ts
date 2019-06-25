import { FooterComponent } from './../footer/footer.component';
import { CommunitySectionComponent } from './../community-section/community-section.component';
import { AboutSectionComponent } from './../about-section/about-section.component';
import {Component, ElementRef, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
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
  @ViewChild('foot', {read: ElementRef}) footerSection;
  @Output() frames = new EventEmitter();
  sections;

  constructor() {}

  ngOnInit() {
    this.sections = [this.aboutSection, this.instagramSection, this.communitySection, this.footerSection];
    this.frames.emit(this.sections);
  }
}
