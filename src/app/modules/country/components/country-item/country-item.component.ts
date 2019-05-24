import { Component, OnInit, Input } from '@angular/core';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent implements OnInit {

  @Input() country: DataPanstwa

  constructor() {}

  ngOnInit() {}
}
