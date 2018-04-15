import { Component, OnInit } from '@angular/core';
import {DemoService} from "../../_services";
import {Playlist, Card} from "../../_models";
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

    constructor(private demo: DemoService, private http: HttpClient) { }
    public cards: Card[] = [];

  ngOnInit() {
      this.demo.getPlaylist().subscribe((data) => {
          for (let i = 0; i < data.length; i++) {
              this.cards.push(data[i].toCard());
          }
      });
  }

}
