import { Component, OnInit } from '@angular/core';
import { Url } from 'src/app/models/url.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    let url: Url = new Url("https://api-v3.mojepanstwo.pl/dane/panstwa?_type=objects&page=2")

    //console.log(url.page(1).order("panstwo.nazwa asc").conditions("imie","Jan").query("test").render())
    console.log(url.render())
  }
}
