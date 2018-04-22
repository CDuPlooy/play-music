import { Component, OnInit } from '@angular/core';
import {DemoService} from '../../_services';
import {Song} from '../../_models';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css']
})
export class NowplayingComponent implements OnInit {
  public songs: Song[];
  constructor(private demo: DemoService) { }

  ngOnInit() {
    let i = 1;
    const obvs = this.demo.getSongs().subscribe( songs => {
        for (let j = 0; j < songs.length; j++) {
            songs[j].num = i++;
        }
        this.songs = songs;
    });

  }
}
