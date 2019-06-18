import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { IInstagramResponse } from './iinstagramresponse';

@Injectable({
  providedIn: 'root'
})
export class InstagramApiService {
  private _siteUrl = 'https://six-degrees-social.herokuapp.com/instagram';

  constructor(private _http: HttpClient) { }

  getInstaData(): Observable<IInstagramResponse> {
    return this._http.get<IInstagramResponse>(this._siteUrl);
  }
}
