import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaskComponent } from './mask/mask.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsletterFormComponent,
    NavbarComponent,
    MaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
