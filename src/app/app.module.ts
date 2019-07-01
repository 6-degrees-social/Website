import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CookieService} from 'ngx-cookie-service';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule} from '@angular/material';
import { MatInputModule, MatInput } from '@angular/material/input';
import { disableBodyScroll, enableBodyScroll, } from 'body-scroll-lock';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaskComponent } from './mask/mask.component';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { FrameListComponent } from './frame-list/frame-list.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { AppSectionComponent } from './app-section/app-section.component';
import { StepsSectionComponent } from './steps-section/steps-section.component';
import { InstagramSectionComponent } from './instagram-section/instagram-section.component' 
import { InstagramCarouselComponent } from './instagram-carousel/instagram-carousel.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';
import { PrivacySectionComponent } from './privacy-section/privacy-section.component' 
import { PhoneCarouselComponent } from './phone-carousel/phone-carousel.component';
import { CommunitySectionComponent } from './community-section/community-section.component';
import { FooterComponent } from './footer/footer.component';
import { RoutingModule } from './routing.module';
import { CookieBarComponent } from './cookie-bar/cookie-bar.component' 

@NgModule({
  declarations: [
    AppComponent,
    NewsletterFormComponent,
    NavbarComponent,
    MaskComponent,
    LandingPageComponent,
    FrameListComponent,
    AboutSectionComponent,
    AppSectionComponent,
    StepsSectionComponent,
    InstagramSectionComponent,
    InstagramCarouselComponent,
    InstagramFeedComponent,
    PrivacySectionComponent,
    PhoneCarouselComponent,
    CommunitySectionComponent,
    FooterComponent,
    CookieBarComponent
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
    MatInputModule,
    SlickCarouselModule,
    RoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    CookieService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
