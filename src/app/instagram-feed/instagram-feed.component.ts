import { Component, OnInit } from '@angular/core';
import { InstagramApiService } from './../instagram-api.service';
import { IRecent_Photos } from '../iinstagramresponse';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss']
})
export class InstagramFeedComponent implements OnInit {
  instagramObjects: IRecent_Photos[] = [];
  slides: string[] = [];

  constructor(private _instagramService: InstagramApiService) { }

  ngOnInit() {
    this._instagramService.getInstaData().subscribe(({recent_photos: photos}) => {
      this.instagramObjects = photos;

      this.instagramObjects.forEach(obj => {
        this.slides.push(obj.images.standard_resolution.url);
      });
    });
  }

  getSlideNum(slideNum) {
    console.log(slideNum);
  }


}
