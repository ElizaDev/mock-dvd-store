import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DvdsComponent } from './dvds/dvds.component';
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component';

const routes: Routes = [
  {path: 'products', component: DvdsComponent},
  {path: 'dvd/:id', component: DvdDetailComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
