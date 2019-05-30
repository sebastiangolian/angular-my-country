import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MojePanstwoPaginationComponent } from './components/pagination/moje-panstwo-pagination.component';
import { DataSetToLinksPipe } from './pipes/dataset-to-links.pipe';
import { DataSetToDataPipe } from './pipes/dataset-to-data.pipe';
import { DataSetToDataArrayPipe } from './pipes/dataset-to-data-array.pipe';

@NgModule({
  declarations: [
    MojePanstwoPaginationComponent,
    DataSetToDataPipe,
    DataSetToDataArrayPipe,
    DataSetToLinksPipe
  ],
  exports: [
    MojePanstwoPaginationComponent,
    DataSetToDataPipe,
    DataSetToDataArrayPipe,
    DataSetToLinksPipe
  ],
  imports: [
    CommonModule
  ]
})
export class MojePanstwoModule { }
