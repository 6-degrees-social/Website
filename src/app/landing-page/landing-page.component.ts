import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations:  [
    trigger('collapseForm', [
      state('show',style({})),
      state('hide',style({ transform: 'translatey(-150%)' })),
      transition('show => hide',animate('900ms ease-out'))

    ])
  ]
})
export class LandingPageComponent implements OnInit {

  isSubscribed: boolean = this._cookieService.check("Email");
  show = true;

  get stateName() {
    return this.show ? 'show' : 'hide'
  } 

  collapse() {
    this.show = !this.show;
  }
  constructor(private _cookieService: CookieService) { }
  
  ngOnInit() {
    console.log(this.isSubscribed);
  }

}
