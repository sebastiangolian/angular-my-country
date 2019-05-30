import { Component, OnInit } from '@angular/core';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';
import { PanstwaService } from 'src/app/services/panstwa.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataSetLinks } from 'src/app/interfaces/base/data-set-links.interface';
import { DataSet } from 'src/app/interfaces/base/data-set.interface';

@Component({
  selector: 'app-page-country-list',
  templateUrl: './page-country-list.component.html',
  styleUrls: ['./page-country-list.component.css']
})
export class PageCountryListComponent implements OnInit {
  
  public countries: Observable<DataPanstwa[]> 
  public links: Observable<DataSetLinks>
    
  constructor(private panstwaService: PanstwaService) {
    this.panstwaService.useBaseUrl()
    this.getData()
  }

  ngOnInit() {}

  onPagination(link: string): void
  {
    this.panstwaService.setUrl(link) 
    this.getData()
  }

  onSearch(value: string): void {
    this.panstwaService.useBaseUrl()
    this.getData(value)
  }

  private getData(value?: string)
  {
    let get: Observable<DataSet<DataPanstwa>> = this.panstwaService.get(value != "" ? value : "" )

    this.countries = get
    .pipe(
      map(({Dataobject}) => Dataobject),
      map(data => {return data.map(element => element.data)})
    );

    this.links = get
    .pipe(
      map(({Links}) => Links)
    );
  }
}
