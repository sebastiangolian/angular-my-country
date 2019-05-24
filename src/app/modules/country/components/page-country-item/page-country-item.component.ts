import { Component, OnInit } from '@angular/core';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';
import { ActivatedRoute } from '@angular/router';
import { PanstwaService } from 'src/app/services/panstwa.service';

@Component({
  selector: 'app-page-country-item',
  templateUrl: './page-country-item.component.html',
  styleUrls: ['./page-country-item.component.css']
})
export class PageCountryItemComponent implements OnInit {
  
  public country: DataPanstwa = null;
  
  constructor(private route: ActivatedRoute, private panstwaService: PanstwaService) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.panstwaService.get(id).subscribe(response => this.country = response.Dataobject[0].data)
  }
}
