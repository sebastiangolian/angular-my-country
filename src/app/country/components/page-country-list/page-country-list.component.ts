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
    this.refresh()
  }

  ngOnInit() {}

  onPagination(url: string): void {
    this.refresh("",url)
  }

  onSearch(value: string): void {
    this.refresh(value)
  }

  private refresh(data?: string, url?: string) {
    if(url){
      this.panstwaService.setUrl(url) 
    }
    else {
      this.panstwaService.useBaseUrl()
    }
    this.dataset$ = this.panstwaService.get(data != "" ? data : "")
  }
}
