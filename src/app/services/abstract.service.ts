import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dataset } from '../interfaces/data-set.interface';

export abstract class AbstractService<T> {

    url: string; 
  
    constructor(public http: HttpClient) { }

    name()
    {
        return 'AbstractService'
    }
  
    get(query?: string): Observable<Dataset<T>> {
      let url:string = this.url
      if(query){
        url += '&conditions[q]=' + query
      }
      return this.http.get<Dataset<T>>(url); 
    }

  }