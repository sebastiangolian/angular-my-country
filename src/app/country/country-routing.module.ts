import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCountryListComponent } from './components/page-country-list/page-country-list.component';
import { PageCountryItemComponent } from './components/page-country-item/page-country-item.component';

const routes: Routes = [
  { path: '', component: PageCountryListComponent},
  { path: ':id', component: PageCountryItemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
