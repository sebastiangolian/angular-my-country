import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dataset } from '../../interfaces/base/data-set.interface';

export abstract class AbstractService<T> {

  order: string;
  url: string; 
  
  constructor(public http: HttpClient) {}

  getUrl(): string
  {
    return this.url + '?order=' + this.order
  }

  get(query?: string): Observable<Dataset<T>> {
    let url:string = this.getUrl()
    if(query){
      url += '&conditions[q]=' + query
    }
    return this.http.get<Dataset<T>>(url); 
  }
}