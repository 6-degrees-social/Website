import {Component, OnInit, Output, EventEmitter, HostListener, Input} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations:  [
    trigger('collapseForm', [
      state('show', style({})),
      state('hide', style({
        transform: 'translatey(-500px)'
      })),
      transition('show => hide',animate('700ms ease-out'))
    ]),
    trigger('parallaxScrl', [
      transition(':decrement', [
        animate('0.1s', style(({
          transform: 'translatey(-100px)'
        })))
      ])
      ]
    )
  ]
})
export class LandingPageComponent implements OnInit {
  @Output() unlockBodyEvent: EventEmitter<any> = new EventEmitter();
  isSubscribed: boolean = this._cookieService.check("Email");
  show = true;

  @Input('ratio') parallaxRatio : number = 1
  windowTop: number = 0;

  constructor(private _cookieService: CookieService) {
    if (this.isSubscribed) {
      enableBodyScroll(this.targetElement)
    }
    else {
      disableBodyScroll(this.targetElement);
    }
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  collapse() {
    console.log('collapse method')
    this.show = !this.show;
    this.unlockBodyEvent.emit(null);
    enableBodyScroll(this.targetElement);
  }

  @HostListener("window:scroll")
  onWindowScroll(){
    document.getElementById("imgToParallax").style.bottom = (window.pageYOffset / 2) + "px";
    document.getElementById("header").style.opacity = ((1 - (window.pageYOffset / window.innerHeight)).toString());
    // console.log((window.pageYOffset / window.innerHeight))
    if (window.pageYOffset > window.innerHeight )
      document.getElementById('imgToParallax').style.visibility = 'hidden';
    else
      document.getElementById('imgToParallax').style.visibility = 'visible';
  }

  ngOnInit() {}
  targetElement = null;
}
