import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';

@Component({
  selector: 'app-country-list-item',
  templateUrl: './country-list-item.component.html',
  styleUrls: ['./country-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListItemComponent implements OnInit {
  
  @Input() country: DataPanstwa = null;
  
  constructor() { }

  ngOnInit() {
  }

}
