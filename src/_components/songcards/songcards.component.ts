import { Component, OnInit } from '@angular/core';
import { Card } from '../../_models';
import { DemoService } from '../../_services';

@Component({
  selector: 'app-songcards',
  templateUrl: './songcards.component.html',
  styleUrls: ['./songcards.component.css']
})
export class SongcardsComponent implements OnInit {

  constructor(private demo: DemoService) { }
  public cards: Card[];

  ngOnInit() {
    // cards = this.demo.getSongs();
  }

}
