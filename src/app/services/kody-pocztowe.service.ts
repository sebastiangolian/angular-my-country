import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataKodyPocztowe } from '../interfaces/data-kody-pocztowe.interface';
import { AbstractService } from './base/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class KodyPocztoweService extends AbstractService<DataKodyPocztowe> {

  url: string = "https://api-v3.mojepanstwo.pl/dane/kody_pocztowe";
  order: string = "kody_pocztowe.kod_int[asc]"

  constructor(public http: HttpClient) { 
    super(http)
  }
}
