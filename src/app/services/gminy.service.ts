import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataGminy } from '../interfaces/data-gminy.interface';
import { Observable } from 'rxjs';
import { Dataset } from '../interfaces/base/data-set.interface';
import { AbstractService } from './base/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class GminyService extends AbstractService<DataGminy> {

  url: string = "https://api-v3.mojepanstwo.pl/dane/gminy"; 
  order: string = "gminy.nazwa[asc]"

  constructor(public http: HttpClient) { 
    super(http)
  }

  getByPowiat(powiat: string): Observable<Dataset<DataGminy>> {
    let url:string = this.getUrl() + '&conditions[powiaty.nazwa]=' + powiat
    return this.http.get<Dataset<DataGminy>>(url);
  }
}
