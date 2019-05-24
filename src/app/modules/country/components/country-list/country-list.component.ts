import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';
import { DataObject } from 'src/app/interfaces/base/data-object.interface';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListComponent implements OnInit {

  @Input() countries: DataObject<DataPanstwa>[] = null;

  constructor() { }

  ngOnInit() {}
}
