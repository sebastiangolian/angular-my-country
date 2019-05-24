import { Component, OnInit } from '@angular/core';
import { KodyPocztoweService } from 'src/app/services/kody-pocztowe.service';
import { DataKodyPocztowe } from 'src/app/interfaces/data-kody-pocztowe.interface';
import { Dataset } from 'src/app/interfaces/base/data-set.interface';
import { DataPanstwa } from 'src/app/interfaces/data-panstwa.interface';
import { PanstwaService } from 'src/app/services/panstwa.service';
import { GminyService } from 'src/app/services/gminy.service';
import { DataGminy } from 'src/app/interfaces/data-gminy.interface';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  constructor(private kodyPocztoweService: KodyPocztoweService, private panstwaService: PanstwaService, private gminyService: GminyService) {}

  ngOnInit() {

    // this.panstwaService.get()
    // .pipe(
    //   map(({Dataobject}) => Dataobject),
    //   map((data) => data[0].data)
    // )
    // .subscribe(response => console.log(response))


    this.panstwaService.get()
    .pipe(
      map(({Dataobject}) => Dataobject[0]),
      map(({data}) => data),
    )
    .subscribe(response => console.log(response))
   
  }
}
