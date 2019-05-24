import { Component, OnInit, Input } from '@angular/core';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';
import { PanstwaService } from 'src/app/services/panstwa.service';
import { DataObject } from 'src/app/interfaces/base/data-object.interface';

@Component({
  selector: 'app-page-country-list',
  templateUrl: './page-country-list.component.html',
  styleUrls: ['./page-country-list.component.css']
})
export class PageCountryListComponent implements OnInit {
  
  public countries: DataObject<DataPanstwa>[] = null;
  
  constructor(private panstwaService: PanstwaService) {}

  async ngOnInit() {
    await this.panstwaService.get().subscribe(response => this.countries = response.Dataobject)
  }
}
