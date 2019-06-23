import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-carousel',
  templateUrl: './phone-carousel.component.html',
  styleUrls: ['./phone-carousel.component.scss']
})
export class PhoneCarouselComponent implements OnInit {
  slides: string[] = [
    '../../assets/Images/Screen 1.png',
    '../../assets/Images/Screen 2.png',
    '../../assets/Images/Screen 3.png',
    '../../assets/Images/Screen 4.png',
    '../../assets/Images/Screen 5.png',
    '../../assets/Images/Screen 6.png',
    '../../assets/Images/Screen 6.1.png',
    '../../assets/Images/Screen 7.png',
    '../../assets/Images/Screen 8.png',
    '../../assets/Images/Screen 9.png',
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "infinite": true,
    "arrows": true,
    "autoplay": true,
    "autoplaySpeed": 2500,
    "pauseOnHover": true,
    "dots": true
  };

  constructor() { }

  ngOnInit() {
  }

}
