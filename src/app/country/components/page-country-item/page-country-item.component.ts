import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataSet } from 'src/app/moje-panstwo/interfaces/data-set.interface';
import { DataPanstwa } from 'src/app/moje-panstwo/interfaces/data-panstwa.interface';
import { PanstwaService } from 'src/app/moje-panstwo/services/panstwa.service';

@Component({
  selector: 'app-page-country-item',
  templateUrl: './page-country-item.component.html',
  styleUrls: ['./page-country-item.component.css']
})
export class PageCountryItemComponent implements OnInit {
  
  public dataset$: Observable<DataSet<DataPanstwa>>
  
  constructor(private route: ActivatedRoute, private panstwaService: PanstwaService) {}

  ngOnInit() {
    this.dataset$ = this.panstwaService.get(this.route.snapshot.paramMap.get('id'))
  }
}
