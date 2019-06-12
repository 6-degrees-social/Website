import { InstagramApiService } from './instagram-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  title = 'sixdegrees-website';

  constructor(private instagram: InstagramApiService) {

  }

  ngOnInit(){
    console.log(this.instagram.getInstaData())
  }
}