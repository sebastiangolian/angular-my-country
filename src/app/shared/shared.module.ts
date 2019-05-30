import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    PaginationComponent,
    SearchComponent
  ],
  exports: [
    PaginationComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
