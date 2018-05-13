import { Component, OnInit } from '@angular/core';
import {PlaymusicService} from '../../_services';

@Component({
  selector: 'app-playbar',
  templateUrl: './playbar.component.html',
  styleUrls: ['./playbar.component.css']
})
export class PlaybarComponent implements OnInit {
  public progress = 0;
  constructor(private play: PlaymusicService) { }

  ngOnInit() {
    this.play.onchange.subscribe(prog => this.progress = prog);
  }
}
