import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { DataKodyPocztowe } from '../interfaces/data-kody-pocztowe.interface';

@Injectable({
  providedIn: 'root'
})
export class KodyPocztoweService extends AbstractService<DataKodyPocztowe> {

  baseUrl: string = "https://api-v3.mojepanstwo.pl/dane/kody_pocztowe"

  constructor(public http: HttpClient) { 
    super(http)
  }
}
