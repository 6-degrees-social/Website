import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstagramApiService {
  private _siteUrl = 'http://localhost:3000/instagram';

  constructor(private _http: HttpClient) { }

  getInstaData() {
    return this._http.get(this._siteUrl).subscribe(data => {
      console.log(data)
    })
  }
}
