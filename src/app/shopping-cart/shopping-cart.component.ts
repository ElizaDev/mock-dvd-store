import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Dvd } from '../dvd';
import { DvdService } from '../dvd.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  dvds: Array<any> = []
  total: number = 0;
  totalValue: number= 0;

  constructor(private dvdService: DvdService, private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.dvdService.getDvds()
      .subscribe(dvds => this.dvds = dvds.slice(1, 5));
      
    // this.totalValue = Dvd.price.reduce((sum, item) => sum + item.Amt,0)
    // console.log('reduce', this.totalValue)
  }

  removeFromCart(dvd): void {
    this.dvdService.delete(dvd).subscribe(dvd =>
      dvd = dvd);
  }

}
