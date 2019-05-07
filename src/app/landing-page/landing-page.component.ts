import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations:  [
    trigger('collapseForm', [
      state('show',style({})),
      state('hide',style({ transform: 'translatey(-500px)' })),
      transition('show => hide',animate('700ms ease-out'))

    ])
  ]
})
export class LandingPageComponent implements OnInit {
  @Output() unlockBodyEvent: EventEmitter<any> = new EventEmitter();
  isSubscribed: boolean = this._cookieService.check("Email");
  show = true;

  get stateName() {
    return this.show ? 'show' : 'hide'
  } 

  collapse() {
    console.log("collapse method")
    this.show = !this.show;
    this.unlockBodyEvent.emit(null);
  }
  constructor(private _cookieService: CookieService) { }
  
  ngOnInit() {
    console.log(this.isSubscribed);
  }

}
