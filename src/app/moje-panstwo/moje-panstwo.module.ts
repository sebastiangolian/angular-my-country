import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DataSetToLinksPipe } from './pipes/dataset-to-links.pipe';
import { DataSetToDataPipe } from './pipes/dataset-to-data.pipe';
import { DataSetToDataArrayPipe } from './pipes/dataset-to-data-array.pipe';

@NgModule({
  declarations: [
    PaginationComponent,
    DataSetToDataPipe,
    DataSetToDataArrayPipe,
    DataSetToLinksPipe
  ],
  exports: [
    PaginationComponent,
    DataSetToDataPipe,
    DataSetToDataArrayPipe,
    DataSetToLinksPipe
  ],
  imports: [
    CommonModule
  ]
})
export class MojePanstwoModule { }
