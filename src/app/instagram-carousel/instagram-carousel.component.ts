import { InstagramApiService } from './../instagram-api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-instagram-carousel',
  templateUrl: './instagram-carousel.component.html',
  styleUrls: ['./instagram-carousel.component.scss']
})
export class InstagramCarouselComponent implements OnInit {
  slides: string[] = [
    '/assets/Images/02BA859B-6C17-458F-A332-418427A4D0FA.jpg',
    'assets/Images/54A90CE4-3685-4E88-A871-C8D2A78B24D0.jpg',
    '/assets/Images/96D32648-B503-4DEE-AFB8-6CBC98416BBE.jpg',
    '/assets/Images/749A67F4-E16E-4C22-A552-BF2283EBBA91.jpg',
    '/assets/Images/6856FD62-5541-4961-8DD1-52E0E7E66C80.jpg',
    '/assets/Images/4522227C-EB74-4118-B5B3-6DB31FA72CD5.jpg',
    '/assets/Images/B7B18B72-2C89-4E7A-A031-6DC415BEAC75.jpg',
    '/assets/Images/B59EA759-7B7A-418F-B935-D8856FD95ED2.jpg',
    '/assets/Images/B722B2CC-F103-42C4-9F5C-AAD80AFFF904.jpg',
    '/assets/Images/D41DA57A-3EF9-4887-9E0A-35FA80724B43.jpg',
    '/assets/Images/F7BE3093-1327-4718-9FF7-DD95900A2EFA.jpg',
    '/assets/Images/FBA1FE8D-EC0F-4215-8F7D-33C5C2838EDF.jpg'
  ];
  @Output() slideNum = new EventEmitter();
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "infinite": true,
    "arrows": true,
    "autoplay": true,
    "autoplaySpeed": 2500,
    "pauseOnHover": true
    // "dots": true
  };

  constructor() { }

  ngOnInit() {

  }
 
  afterChange(e) {
    this.slideNum.emit(e.currentSlide);
  }

  slickInit(e) {
    this.slideNum.emit(0);
  }

}
