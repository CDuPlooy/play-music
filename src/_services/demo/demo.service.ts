import { Injectable } from '@angular/core';
import { Song, Album, Playlist, User } from '../../_models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class DemoService {

  constructor(private http: HttpClient) {  }
  private songs: Song[];
  private users: User[];
  private playlist: Playlist[];


  public getSongs() {

  }


  public getAlbums(): Observable<Album[]> {
          const url = 'https://raw.githubusercontent.com/DowntownCookieFrenzy/play-music-json/master/demo.json';
          const obvs: Observable<JSON> = this.http.get<JSON>(url, {responseType: 'json'});
          return obvs.pipe(
              map((data) => {
                data = data['Albums'];
                const albums: Album[] = [];
                for (let i = 0; i < Object.keys(data).length; i++) {
                  albums.push(Album.parse(data[i]));
                }
                return albums;
              })
          );
  }


}
