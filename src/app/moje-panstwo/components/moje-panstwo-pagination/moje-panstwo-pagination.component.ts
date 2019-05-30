import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { DataSetLinks } from '../../interfaces/data-set-links.interface';

@Component({
  selector: 'app-moje-panstwo-pagination',
  templateUrl: './moje-panstwo-pagination.component.html',
  styleUrls: ['./moje-panstwo-pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojePanstwoPaginationComponent implements OnInit {

  @Input() links: DataSetLinks;
  @Output() selectLink: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClick(link: string): void {
    this.selectLink.emit(link);
  }
}
