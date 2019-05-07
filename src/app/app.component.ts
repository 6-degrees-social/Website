import { Component } from '@angular/core';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor(){
  //   disableBodyScroll(this.targetElement);
  // }
  title = 'sixdegrees-website';
  // targetElement = null;
  // unlockBody() {
  //   this.targetElement = document.querySelector('#bodyToLock');
  //   enableBodyScroll(this.targetElement);
  // }
}