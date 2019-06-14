import { InstagramApiService } from './../instagram-api.service';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-instagram-carousel',
  templateUrl: './instagram-carousel.component.html',
  styleUrls: ['./instagram-carousel.component.scss']
})
export class InstagramCarouselComponent implements OnInit {
  images: string[] = [];

  constructor(private _instagramService: InstagramApiService) { }

  ngOnInit() {
    this._instagramService.getInstaData().subscribe(({recent_photos: photos}) => {
      photos.forEach(obj => {
        this.images.push(obj.images.standard_resolution.url);
      });
    })
  }

}
