import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dataset } from '../interfaces/data-set.interface';
import { DataKodyPocztowe } from '../interfaces/data-kody-pocztowe.interface';

@Injectable({
  providedIn: 'root'
})
export class KodyPocztoweService {

  url: string = "https://api-v3.mojepanstwo.pl/dane/kody_pocztowe";

  constructor(private http: HttpClient) { }

  get(query?: string): Observable<Dataset<DataKodyPocztowe>> {
    let url:string = this.url
    if(query){
      url += '?conditions[q]=' + query
    }
    return this.http.get<Dataset<DataKodyPocztowe>>(url);
  }

  
}
