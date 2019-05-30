import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataPanstwa } from 'src/app/moje-panstwo/interfaces/data-panstwa.interface';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListComponent implements OnInit {

  @Input() countries: DataPanstwa[];

  constructor() { }

  ngOnInit() {}
}
