import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataPanstwa } from '../interfaces/data-panstwa.interface';
import { AbstractService } from './base/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class PanstwaService  extends AbstractService<DataPanstwa>  {

  url: string = "https://api-v3.mojepanstwo.pl/dane/panstwa";
  order: string = "panstwa.nazwa[asc]"

  constructor(public http: HttpClient) { 
    super(http)
  }
}
