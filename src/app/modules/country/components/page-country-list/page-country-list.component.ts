import { Component, OnInit, Input } from '@angular/core';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';
import { PanstwaService } from 'src/app/services/panstwa.service';
import { DataObject } from 'src/app/interfaces/base/data-object.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-country-list',
  templateUrl: './page-country-list.component.html',
  styleUrls: ['./page-country-list.component.css']
})
export class PageCountryListComponent implements OnInit {
  
  public countries: Observable<DataPanstwa[]> = 
  this.panstwaService.get()
    .pipe(
      map(({Dataobject}) => Dataobject),
      map(data => {return data.map(element => element.data)})
    );
  
  constructor(private panstwaService: PanstwaService) {}

  ngOnInit() {
    
  }
}
