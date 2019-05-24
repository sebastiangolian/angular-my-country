import { Component, OnInit } from '@angular/core';
import { KodyPocztoweService } from 'src/app/services/kody-pocztowe.service';
import { DataKodyPocztowe } from 'src/app/interfaces/data-kody-pocztowe.interface';
import { Dataset } from 'src/app/interfaces/base/data-set.interface';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';
import { PanstwaService } from 'src/app/services/panstwa.service';
import { GminyService } from 'src/app/services/gminy.service';
import { DataGminy } from 'src/app/interfaces/data-gminy.interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  constructor(private kodyPocztoweService: KodyPocztoweService, private panstwaService: PanstwaService, private gminyService: GminyService) {}

  ngOnInit() {

    this.kodyPocztoweService.get('21-412').subscribe((data:Dataset<DataKodyPocztowe>)=>console.log(data.Dataobject[0].data["kody_pocztowe.gminy_str"])); 
    this.panstwaService.get('Honduras').subscribe((data:Dataset<DataPanstwa>)=>console.log(data.Dataobject[0].data["panstwa.symbol"])); 
    this.gminyService.getByPowiat('łukowski').subscribe((data:Dataset<DataGminy>)=>console.log(data.Dataobject[0].data["gminy.nazwa"])); 
    this.gminyService.get().subscribe((data:Dataset<DataGminy>)=>console.log(data.Dataobject[0].data["gminy.nazwa"])); 
  }
}
