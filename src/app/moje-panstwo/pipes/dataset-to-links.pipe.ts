import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dataSetToLinks', pure: false })
export class DataSetToLinksPipe implements PipeTransform {
  constructor() {
  }

  transform(data:any) {
    return data.Links
  }
}