import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataKodyPocztowe } from '../interfaces/data-kody-pocztowe.interface';
import { AbstractService } from './base/abstract.service';
import { Url } from '../models/url.model';

@Injectable({
  providedIn: 'root'
})
export class KodyPocztoweService extends AbstractService<DataKodyPocztowe> {

  baseUrl: string = "https://api-v3.mojepanstwo.pl/dane/kody_pocztowe"

  constructor(public http: HttpClient) { 
    super(http)
  }
}
