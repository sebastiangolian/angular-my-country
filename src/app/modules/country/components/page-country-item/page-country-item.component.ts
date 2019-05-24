import { Component, OnInit } from '@angular/core';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';
import { ActivatedRoute } from '@angular/router';
import { PanstwaService } from 'src/app/services/panstwa.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-country-item',
  templateUrl: './page-country-item.component.html',
  styleUrls: ['./page-country-item.component.css']
})
export class PageCountryItemComponent implements OnInit {
  
  public country: Observable<DataPanstwa> = this.panstwaService.get(this.route.snapshot.paramMap.get('id'))
  .pipe(
    map(({Dataobject}) => Dataobject[0]),
    map(({data}) => data),
  )
  
  constructor(private route: ActivatedRoute, private panstwaService: PanstwaService) { }

  ngOnInit() {

  }
}
