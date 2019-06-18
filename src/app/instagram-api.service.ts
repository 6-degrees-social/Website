import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { IInstagramResponse } from './iinstagramresponse';

@Injectable({
  providedIn: 'root'
})
export class InstagramApiService {
  private _siteUrl = 'http://localhost:3000/instagram';

  constructor(private _http: HttpClient) { }

  getInstaData(): Observable<IInstagramResponse> {
    return this._http.get<IInstagramResponse>(this._siteUrl);
  }
}
