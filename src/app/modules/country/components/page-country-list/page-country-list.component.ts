import { Component, OnInit } from '@angular/core';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';
import { PanstwaService } from 'src/app/services/panstwa.service';
import { Observable } from 'rxjs';
import { DataSet } from 'src/app/interfaces/base/data-set.interface';

@Component({
  selector: 'app-page-country-list',
  templateUrl: './page-country-list.component.html',
  styleUrls: ['./page-country-list.component.css']
})
export class PageCountryListComponent implements OnInit {
  
  public dataobject$: Observable<DataSet<DataPanstwa>>
    
  constructor(private panstwaService: PanstwaService) {
    this.panstwaService.useBaseUrl()
    this.dataobject$ = this.panstwaService.get()
  }

  ngOnInit() {}

  onPagination(link: string): void
  {
    this.panstwaService.setUrl(link) 
    this.dataobject$ = this.panstwaService.get()
  }

  onSearch(value: string): void {
    this.panstwaService.useBaseUrl()
    this.dataobject$ = this.panstwaService.get(value != "" ? value : "")
  }
}
