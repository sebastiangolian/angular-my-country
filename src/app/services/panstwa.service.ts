import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataPanstwa } from '../interfaces/data-panstwa.interface';
import { AbstractService } from './base/abstract.service';
import { Url } from '../models/url.model';

@Injectable({
  providedIn: 'root'
})
export class PanstwaService extends AbstractService<DataPanstwa>  {

  baseUrl: string = "https://api-v3.mojepanstwo.pl/dane/panstwa"

  constructor(public http: HttpClient) { 
    super(http)
    this.url = new Url(this.baseUrl)
  }
}
