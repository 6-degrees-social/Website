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
  mailChimpEndpoint = 'https://gmail.us20.list-manage.com/subscribe/post-json?u=0863c931e41957d9a8cb16e12&amp;id=1bdc22b205&';
  error = '';

  constructor(private http: HttpClient, private _cookieService: CookieService) { }

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  showCookies() {
    this.overlayType.emit('cookie');
  }

  onSubmit(evt: Event) {
    evt.preventDefault();
    this.error = '';

    if (this.emailControl.status === 'VALID') {
      console.log('works')
      const params = new HttpParams()
        // .set('FNAME', this.nameControl.value)
        .set('EMAIL', this.emailControl.value)
        .set('b_0863c931e41957d9a8cb16e12_1bdc22b205', '');

      const mailChimpUrl = this.mailChimpEndpoint + params.toString();
      console.log(mailChimpUrl);

      this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
        console.log(response);
        console.log('result of response: ' + response.result)
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
  ngOnInit() {
  }
}
