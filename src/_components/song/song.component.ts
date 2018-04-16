import { Component, OnInit } from '@angular/core';
import {DemoService} from '../../_services';
import {Card, Song} from '../../_models';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

    constructor(private demo: DemoService, private http: HttpClient) { }
    public cards: Card[] = [];

  ngOnInit() {
      this.demo.getSongs().subscribe((data) => {
          for (let i = 0; i < data.length; i++) {
              this.cards.push(data[i].toCard());
          }
      });
  }

}
