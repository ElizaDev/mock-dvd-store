import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Http } from '@angular/http';

import { Dvd } from './dvd';

@Injectable({
  providedIn: 'root'
})
export class DvdService {
  private _dvdUrl = 'app/dvds';
  private _jsonUrl = '../data/mock_data.json'

  constructor(private http: HttpClient, private _httpJSON: Http) { }

  getDvds() {
    return this.http
    .get<Dvd[]>(this._dvdUrl).pipe(catchError(this.handleError));
  }

  getDvd(id: string): Observable<Dvd> {
    return this.getDvds().pipe(
      map(dvds => dvds.find(dvd => dvd.id === id))
    );
  }

  getList() {
    return this._httpJSON.get(this._jsonUrl).pipe(
      map((response) => response.json())
    )
  }

  save(dvd: Dvd) {
    if (dvd.id) {
      return this.put(dvd);
    }
    return this.post(dvd);
  }

  delete(dvd: Dvd) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this._dvdUrl}/${dvd.id}`;

    return this.http.delete<Dvd>(url);
  }

  put(dvd: Dvd) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this._dvdUrl}/${dvd.id}`;

    return this.http.put<Dvd>(url, dvd).pipe(catchError(this.handleError));

  }

  post(dvd: Dvd) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Dvd>(this._dvdUrl, dvd).pipe(catchError(this.handleError));

  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
