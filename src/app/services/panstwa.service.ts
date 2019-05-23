import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataPanstwa } from '../interfaces/data-panstwa.interface';
import { Observable } from 'rxjs';
import { Dataset } from '../interfaces/data-set.interface';

@Injectable({
  providedIn: 'root'
})
export class PanstwaService {

  url: string = "https://api-v3.mojepanstwo.pl/dane/panstwa";

  constructor(private http: HttpClient) { }

  get(query?: string): Observable<Dataset<DataPanstwa>> {
    let url:string = this.url
    if(query){
      url += '?conditions[q]=' + query
    }
    return this.http.get<Dataset<DataPanstwa>>(url);
  }
}
