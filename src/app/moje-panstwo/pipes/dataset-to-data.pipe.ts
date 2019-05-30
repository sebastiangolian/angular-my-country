import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dataSetToData', pure: false })
export class DataSetToDataPipe implements PipeTransform {
  constructor() {}

  transform(data:any) {
    return data.Dataobject[0].data;
  }
}