import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Dvd } from '../dvd';
import { DvdService } from '../dvd.service';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.scss']
})
export class DvdDetailComponent implements OnInit {
  @Input() dvd: Dvd;
  error: any;
  navigated = false;

  constructor(private dvdService: DvdService,
              private route: ActivatedRoute
    ) { }

  ngOnInit():void {
    this.route.params.forEach((params: Params) => {
      if(params['id'] !== undefined) {
        const id: string = params['id'];
        this.navigated = true;
        this.dvdService.getDvd(id).subscribe(dvd => (this.dvd = dvd));
      } else {
        this.navigated = false;
      }
    })
  }

  goBack(): void{
    if (this.navigated) {
      window.history.back();
    }
  }

  addToCart(): void {
    this.dvdService.save(this.dvd).subscribe(dvd => {
      this.dvd = dvd;
    })
  }

}
