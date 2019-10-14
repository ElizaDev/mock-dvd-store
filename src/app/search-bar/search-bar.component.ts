import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { Dvd } from '../dvd';
import { DvdSearchService } from '../dvd-search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  dvds: Observable<Dvd[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private dvdSearchService: DvdSearchService,
    private router: Router
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.dvds = this.searchTerms.pipe(
      debounceTime(300), 
      distinctUntilChanged(),
      switchMap(
        term =>
          term ? this.dvdSearchService.search(term) : of<Dvd[]>([])
      ),
      catchError(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<Dvd[]>([]);
      })
    );
  }

  gotoDetail(id: string): void {
    this.router.navigate(['/dvd', id]);
  }

}
