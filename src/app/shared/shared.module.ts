import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { DataSetToLinksPipe } from './pipes/dataset-to-links.pipe';
import { DataSetToDataPipe } from './pipes/dataset-to-data.pipe';

@NgModule({
  declarations: [
    PaginationComponent,
    SearchComponent,
    DataSetToLinksPipe,
    DataSetToDataPipe
  ],
  exports: [
    PaginationComponent,
    SearchComponent,
    DataSetToLinksPipe,
    DataSetToDataPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
