import { Component, OnInit } from '@angular/core';
import {Album, Card} from '../../_models';
import {DemoService} from '../../_services';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private demo: DemoService, private http: HttpClient) { }
  public cards: Card[] = [];

  ngOnInit() {
      this.demo.getAlbums().subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          this.cards.push(data[i].toCard());
        }
      });
  }

}
