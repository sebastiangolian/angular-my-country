import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSet } from 'src/app/moje-panstwo/interfaces/data-set.interface';
import { DataPanstwa } from 'src/app/moje-panstwo/interfaces/data-panstwa.interface';
import { PanstwaService } from 'src/app/moje-panstwo/services/panstwa.service';

@Component({
  selector: 'app-page-country-list',
  templateUrl: './page-country-list.component.html',
  styleUrls: ['./page-country-list.component.css']
})
export class PageCountryListComponent implements OnInit {
  
  public dataset$: Observable<DataSet<DataPanstwa>>
    
  constructor(private panstwaService: PanstwaService) {
    this.panstwaService.useBaseUrl()
    this.dataset$ = this.panstwaService.get()
  }

  ngOnInit() {}

  onPagination(link: string): void
  {
    this.panstwaService.setUrl(link) 
    this.dataset$ = this.panstwaService.get()
  }

  onSearch(value: string): void {
    this.panstwaService.useBaseUrl()
    this.dataset$ = this.panstwaService.get(value != "" ? value : "")
  }
}
