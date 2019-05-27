import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataSetLinks } from 'src/app/interfaces/base/data-set-links.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {

  @Input() links: DataSetLinks;

  constructor() { }

  ngOnInit() {
  }

}
