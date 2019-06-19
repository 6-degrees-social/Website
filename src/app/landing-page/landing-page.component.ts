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
  @Output() showOverlayEvent: EventEmitter<any> = new EventEmitter();
  @ViewChild('overlay', {read: ElementRef}) private Overlay: ElementRef;
  @ViewChild('imgToParallax', {read: ElementRef}) private imgToParallax: ElementRef;
  @ViewChild('header', {read: ElementRef}) private header: ElementRef;
  policyTemplate: any = '';
  isSubscribed: boolean = this._cookieService.check("Email");
  show = true;

  constructor(private _cookieService: CookieService,private http:HttpClient ) {
    let headers = new HttpHeaders({
      'Accept':'text/html',
      'XFF':'testing123'
    });

    console.log(http.get('https://www.iubenda.com/privacy-policy/11781988/cookie-policy'), {headers: headers})
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

  showOverlay(evt) {
    this.Overlay.nativeElement.style.display = 'block'
    this.showOverlayEvent.emit(evt);
  }

  @HostListener("window:scroll")
  onWindowScroll(){
    this.imgToParallax.nativeElement.style.bottom = (window.pageYOffset / 2) + 'px';
    this.header.nativeElement.style.opacity = ((1 - (window.pageYOffset / window.innerHeight)).toString());
    if (window.pageYOffset > window.innerHeight )
      this.imgToParallax.nativeElement.style.visibility = 'hidden'
    else
      this.imgToParallax.nativeElement.style.visibility = 'visible'
  }

  ngOnInit() {}
  targetElement = null;
}
