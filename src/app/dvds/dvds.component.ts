import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from "rxjs"
import { Router } from '@angular/router';
import { Dvd } from '../dvd';
import { DvdService } from '../dvd.service'
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { MatPaginator, PageEvent, RippleTarget } from '@angular/material';

@Component({
  selector: 'app-dvds',
  templateUrl: './dvds.component.html',
  styleUrls: ['./dvds.component.scss']
})
export class DvdsComponent implements OnInit {
  dvd: Dvd[];
  selectedDvd: Dvd;
  error: any;
  productList = require('../../data/mock_data.json');
  pagedList;
  length: number = 0;
  breakpoint: number = 5;
  pageSizeOptions: number[] = [5, 10, 20, 50, 100];
  public searchString: string;
  filteredList: any;
  


  constructor(private router: Router, private dvdService: DvdService, private _http: Http) { }

  ngOnInit(): void {
    this.getDvds();
    this.pagedList = this.productList.slice(0, 5);
    this.length = this.productList.length;
    this.filteredList = this.productList;
  }

  OnPageChange(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.pagedList = this.filteredList.slice(startIndex, endIndex);
    
  }

  onSearchChange(value: any) {
    this.pagedList = this.productList.filter(singleItem => singleItem['title'].toLowerCase().includes(value.toLowerCase())).slice(0,5);
    this.length = this.productList.filter(singleItem => singleItem['title'].toLowerCase().includes(value.toLowerCase())).length;
    this.filteredList = this.productList.filter(singleItem => singleItem['title'].toLowerCase().includes(value.toLowerCase()));
  }


  getDvds(): void {
    this.dvdService
      .getDvds()
      .subscribe(
        dvds => (this.dvd = dvds),
        error => (this.error = error)
      )
  }

  gotoDetail(id: string): void {
    this.router.navigate(['/dvd', id]);
  }

}
