import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent, ShoppingCartDisplayDialog } from './app.component';
import { DvdsComponent } from './dvds/dvds.component';
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { 
  MatButtonModule,
  MatPaginatorModule,
  MatGridListModule,
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatBadgeModule,
  MatIconModule,
  MatBottomSheetModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
 } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule} from '@angular/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DvdsComponent,
    DvdDetailComponent,
    ShoppingCartComponent,
    SearchBarComponent,
    ShoppingCartDisplayDialog,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    }),
    BrowserAnimationsModule,
    HttpModule,

    MatButtonModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatBadgeModule,
    MatIconModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [FilterPipe],
  entryComponents: [
    ShoppingCartDisplayDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
