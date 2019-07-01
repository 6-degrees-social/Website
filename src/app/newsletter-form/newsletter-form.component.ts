import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CookieService} from 'ngx-cookie-service';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnInit {

  @Output() submitEvent: EventEmitter<any> = new EventEmitter();
  @Output() overlayType: EventEmitter<any> = new EventEmitter()
  expiredDate = new Date()
  submitted = false;
  mailChimpEndpoint = 'https://social.us18.list-manage.com/subscribe/post-json?u=79c889801f459f248870e1d51&amp;id=482e7627ed&';
  error = '';

  constructor(private http: HttpClient, private _cookieService: CookieService) { }

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  showCookies(evt) {
    evt.preventDefault()
    this.overlayType.emit('cookie');
  }
  showPolicy(evt) {
    evt.preventDefault();
    this.overlayType.emit('policy');
  }

  onSubmit(evt: Event) {
    evt.preventDefault();
    this.error = '';

    if (this.emailControl.status === 'VALID') {
      const params = new HttpParams()
        .set('EMAIL', this.emailControl.value)
        .set('b_79c889801f459f248870e1d51_482e7627ed', '');

      const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
        if (response.result) {
          this.expiredDate.setDate(this.expiredDate.getDate() + 365)
          this.submitted = true;
          this.setCookie(this.emailControl.value, this.expiredDate);
          this.submitEvent.emit(null);
        } else {
          this.error = response.msg;
        }
      }, error => {
        console.error(error);
        this.error = 'Sorry, an error occurred.';
      });
    } else{
      console.log('doesn\'t work');
    }
  }

  setCookie(cEmail, date) {
    this._cookieService.set('Email', cEmail, date);
  }

  getErrorMessage() {
    return this.emailControl.hasError('required') ? 'You must enter a value' :
        this.emailControl.hasError('email') ? 'Not a valid email' :
            '';
  }
  closeMessage() {
    this.submitEvent.emit(null)
  }

  ngOnInit() {
  }
}
