import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { DataGminy } from '../interfaces/data-gminy.interface';
import { Url } from '../models/url.model';
import { DataSet } from '../interfaces/data-set.interface';


@Injectable({
  providedIn: 'root'
})
export class GminyService extends AbstractService<DataGminy> {

  baseUrl: string = "https://api-v3.mojepanstwo.pl/dane/gminy"
  
  constructor(public http: HttpClient) { 
    super(http)
    this.url = new Url(this.baseUrl)
  }

  getByPowiat(powiat: string): Observable<DataSet<DataGminy>> {
    let url:string = this.url + '&conditions[powiaty.nazwa]=' + powiat
    return this.http.get<DataSet<DataGminy>>(url);  
  }
}
