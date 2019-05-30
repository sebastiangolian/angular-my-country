import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dataSetToDataArray', pure: false })
export class DataSetToDataArrayPipe implements PipeTransform {
  
  constructor() {}

  transform(data:any) {
    return data.Dataobject.map(data => data.data)
  }
}