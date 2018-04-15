import { Injectable } from '@angular/core';
import { Song,Album,Playlist,User } from '../../_models';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { map } from 'rxjs/operators';

@Injectable()
export class DemoService {

  constructor(private http: HttpClient) { this.resetDemo(); }
  private songs: Song[];
  private albums: Album[];
  private users: User[];
  private playlist: Playlist[];


  public resetDemo(){
    this.songs = [];
    this.albums = [];
    this.users = [];
    this.playlist = [];
  }

  public getSongs(){

  }

  public getAlbums(): Observable<JSON> {
          const obvs: Observable<string> = this.http.get<string>('https://raw.githubusercontent.com/DowntownCookieFrenzy/play-music-json/master/demo.json', {responseType: 'json'});
          return obvs.pipe(
              map((data) => data['Albums'])
          );
  }

}
