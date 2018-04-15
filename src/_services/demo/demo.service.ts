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


  public getSongs(): Observable<Song[]> {
      const url = 'https://raw.githubusercontent.com/DowntownCookieFrenzy/play-music-json/master/demo.json';
      const obvs: Observable<JSON> = this.http.get<JSON>(url, {responseType: 'json'});
      return obvs.pipe(
          map((data) => {
              data = data['Songs'];
              const songs: Song[] = [];
              for (let i = 0; i < Object.keys(data).length; i++) {
                  songs.push(Song.parse(data[i]));
              }
              return songs;
          })
      );
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

    public getPlaylist(): Observable<Playlist[]> {
        const url = 'https://raw.githubusercontent.com/DowntownCookieFrenzy/play-music-json/master/demo.json';
        const obvs: Observable<JSON> = this.http.get<JSON>(url, {responseType: 'json'});
        return obvs.pipe(
            map((data) => {
                data = data['Playlists'];
                const playlist: Playlist[] = [];
                for (let i = 0; i < Object.keys(data).length; i++) {
                    playlist.push(Playlist.parse(data[i]));
                }
                return playlist;
            })
        );
    }


}
