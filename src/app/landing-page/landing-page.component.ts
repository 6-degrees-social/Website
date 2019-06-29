import {Component, OnInit, Output, EventEmitter, HostListener, Input, ViewChild, ElementRef} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations:  [
    trigger('collapseForm', [
      state('show', style({})),
      state('hide', style({
        transform: 'translatey(-200vh)'
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
  @Output() showOverlayEvent: EventEmitter<any> = new EventEmitter();
  @ViewChild('overlay', {read: ElementRef}) private Overlay: ElementRef;
  @ViewChild('imgToParallax', {read: ElementRef}) private imgToParallax: ElementRef;
  @ViewChild('header', {read: ElementRef}) private header: ElementRef;
  isSubscribed: boolean = this._cookieService.check("Email");
  show = true;

  constructor(private _cookieService: CookieService, http: HttpClient ) {
    // if (this.isSubscribed) {
    //   enableBodyScroll(this.targetElement)
    // }
    // else {
    //   disableBodyScroll(this.targetElement);
    // }
  }

  getPolicy(evt) {
    let url = ''
    if (evt == 'cookie')
      url = 'https://www.iubenda.com/privacy-policy/11781988/cookie-policy'
    else
      url = 'https://www.iubenda.com/privacy-policy/11781988'
    const windowFeatures = 'toolbar=no, location=no, directories=no, status=no, menubar=no, titlebar=no, scrollbars=no, resizable=no, ';
    window.open(url, 'Privacy Policy', windowFeatures+' width='+ window.innerWidth/2 +', height='+ window.innerHeight/2 +', top='+ window.innerHeight/4 +', left='+ window.innerWidth/4)
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  collapse() {
    this.show = !this.show;
    this.unlockBodyEvent.emit(null);
    enableBodyScroll(this.targetElement);
  }

  showOverlay(evt) {
    this.Overlay.nativeElement.style.display = 'block'
    this.showOverlayEvent.emit(evt);
  }

  isLandscape = () => window.innerHeight < window.innerWidth
  @HostListener("window:scroll")
  onWindowScroll(){
    this.imgToParallax.nativeElement.style.top = (-window.pageYOffset / 1.5) + 'px';
    this.header.nativeElement.style.opacity = ((1 - (window.pageYOffset / window.innerHeight)).toString());
  }

  ngOnInit() {}
  targetElement = null;
}
