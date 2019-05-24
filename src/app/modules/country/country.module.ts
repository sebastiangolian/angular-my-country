import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryItemComponent } from './components/country-item/country-item.component';
import { PageCountryListComponent } from './components/page-country-list/page-country-list.component';
import { PageCountryItemComponent } from './components/page-country-item/page-country-item.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryListItemComponent } from './components/country-list-item/country-list-item.component';

@NgModule({
  declarations: [CountryItemComponent, PageCountryListComponent, PageCountryItemComponent, CountryListComponent, CountryListItemComponent],
  imports: [
    CommonModule,
    CountryRoutingModule
  ],
  exports: [PageCountryListComponent, PageCountryItemComponent]
})
export class CountryModule { }
