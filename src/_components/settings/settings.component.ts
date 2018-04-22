import { Component, OnInit } from '@angular/core';
import {Artist} from '../../_models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public blockee: string;
  public artists: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  public block() {
    console.log(this.blockee);
    if (this.blockee.length !== 0) {
        this.artists.push(this.blockee);
    }
    this.blockee = '';
  }
}
