import { InstagramApiService } from './../instagram-api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-instagram-carousel',
  templateUrl: './instagram-carousel.component.html',
  styleUrls: ['./instagram-carousel.component.scss']
})
export class InstagramCarouselComponent implements OnInit {
  @Input() slides: string[] = [];
  @Output() slideNum = new EventEmitter();
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "infinite": true,
    "arrows": true,
    "autoplay": true,
    "autoplaySpeed": 2500,
    "pauseOnHover": true,
    "dots": true,
    // "nextArrow": '<button type="button" class="btn btn-default">Next</button>',
    // "prevArrow": '<button type="button" class="slick-prev">Previous</button>',
    // "appendArrows": ''
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
