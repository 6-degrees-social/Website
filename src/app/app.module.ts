import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CookieService} from 'ngx-cookie-service';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule} from '@angular/material';
import { MatInputModule, MatInput } from '@angular/material/input';

import { AppComponent } from './app.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaskComponent } from './mask/mask.component';
import { LandingPageComponent} from './landing-page/landing-page.component' 

@NgModule({
  declarations: [
    AppComponent,
    NewsletterFormComponent,
    NavbarComponent,
    MaskComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
