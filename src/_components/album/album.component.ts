import { Component, OnInit } from '@angular/core';
import {Album} from "../../_models";
import {DemoService} from "../../_services";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private demo: DemoService) { }
  public albums: Album[];
  public buffer: JSON;

  ngOnInit() {
    console.log("Testing: ");
    this.demo.getAlbums();
  }

}
