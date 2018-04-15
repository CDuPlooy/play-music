import { Component, OnInit } from '@angular/core';
import {Album} from "../../_models";
import {DemoService} from "../../_services";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private demo: DemoService, private http: HttpClient) { }
  public albums: Album[];
  public buffer: JSON;

  ngOnInit() {
      this.demo.getAlbums();
  }

}
