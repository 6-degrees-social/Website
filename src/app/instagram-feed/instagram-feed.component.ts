import { Component, OnInit } from '@angular/core';
import { InstagramApiService } from './../instagram-api.service';
import { IRecent_Photo } from '../iinstagramresponse';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss']
})
export class InstagramFeedComponent implements OnInit {
  instagramObjects: IRecent_Photo[] = [];
  current: IRecent_Photo;
  likes: number;
  comments: number;
  caption: string;
  slides: string[] = [];
  name: string;
  profilePic: string;

  constructor(private _instagramService: InstagramApiService, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this._instagramService.getInstaData().subscribe(({recent_photos: photos}) => {
      this.instagramObjects = photos;

      this.instagramObjects.forEach(obj => {
        this.slides.push(obj.images.standard_resolution.url);
      });
    });
  }

  getSlideNum(slideNum) {
    this.current = this.instagramObjects[slideNum];
    this.getAttributes(this.current);
  }

  getAttributes({likes, comments, caption, user}) {
    this.getCaption(caption);
  }

  getUser({full_name, profile_picture}) {
    this.name = full_name;
    this.profilePic = profile_picture;
  }

  getLikes({count}) {
    this.likes = count;
    this.cdref.detectChanges();
  }

  getComments({count}) {
    this.comments = count;
    this.cdref.detectChanges();
  }

  getCaption({text}) {
    this.caption = text.split('#')[0];
    this.cdref.detectChanges();
  }

}
