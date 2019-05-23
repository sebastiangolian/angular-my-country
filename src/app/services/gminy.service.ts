import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataGminy } from '../interfaces/data-gminy.interface';
import { Observable } from 'rxjs';
import { Dataset } from '../interfaces/data-set.interface';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class GminyService extends AbstractService<DataGminy> {

  url: string = "https://api-v3.mojepanstwo.pl/dane/gminy?order=gminy.nazwa[asc]"; 

  get(query?: string): Observable<Dataset<DataGminy>> {
    let url:string = this.url
    if(query){
      url += '&conditions[q]=' + query
    }
    return this.http.get<Dataset<DataGminy>>(url); 
  }

  getByPowiat(powiat: string): Observable<Dataset<DataGminy>> {
    let url:string = this.url + '&conditions[powiaty.nazwa]=' + powiat
    return this.http.get<Dataset<DataGminy>>(url);
  }
}
