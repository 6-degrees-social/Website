import { InstagramApiService } from './../instagram-api.service';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { slick } from 'slick-carousel'

@Component({
  selector: 'app-instagram-carousel',
  templateUrl: './instagram-carousel.component.html',
  styleUrls: ['./instagram-carousel.component.scss']
})
export class InstagramCarouselComponent implements OnInit {
  slides: string[] = [];

  constructor(private _instagramService: InstagramApiService) { }

  ngOnInit() {
    this._instagramService.getInstaData().subscribe(({recent_photos: photos}) => {
      photos.forEach(obj => {
        this.slides.push(obj.images.standard_resolution.url);
      });
    })
  }
 
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "infinite": true,
    "arrows": true,
    "autoplaySpeed": 500,
    "pauseOnHover": true
  };
  
  afterChange(e) {
    console.log(e.currentSlide)
  }

  slickInit(e) {
    e.currentSlide = 0;
  }

}
