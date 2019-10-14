import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Dvd } from './dvd'

@Injectable({
  providedIn: 'root'
})
export class DvdSearchService {

  constructor(private http: HttpClient) { }

  search(term: string): Observable<Dvd[]> {
    return this.http
    .get<Dvd[]>(`app/dvds/?name=${term}`)
    .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server Error');
  }
}
