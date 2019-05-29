import { Component, OnInit } from '@angular/core';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';
import { PanstwaService } from 'src/app/services/panstwa.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataSetLinks } from 'src/app/interfaces/base/data-set-links.interface';

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

  onChangeSelectedLink(link: string): void
  {
    this.panstwaService.setUrl(link) 
    this.getData()
  }

  private getData()
  {
    this.countries = this.panstwaService.get()
    .pipe(
      map(({Dataobject}) => Dataobject),
      map(data => {return data.map(element => element.data)})
    );

    this.links = this.panstwaService.get()
    .pipe(
      map(({Links}) => Links)
    );
  }
}
