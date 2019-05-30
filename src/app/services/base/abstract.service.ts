import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataSet } from '../../interfaces/base/data-set.interface';
import { Url } from 'src/app/models/url.model';

export abstract class AbstractService<T> {

  baseUrl: string
  url: Url
  
  constructor(public http: HttpClient) {}

  setUrl(url: string): AbstractService<T>
  {
    this.url = new Url(url)
    return this
  }

  useBaseUrl(): AbstractService<T>
  {
    this.url = new Url(this.baseUrl)
    return this
  }

  get(query?: string): Observable<DataSet<T>> {
    if(query){
      this.useBaseUrl()
      this.url.query(query)
    }
    return this.http.get<DataSet<T>>(this.url.render()); 
  }
}