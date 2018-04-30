import { Component, OnInit } from '@angular/core';
import {DemoService} from '../../_services';
import {Playlist, Card} from '../../_models';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

    constructor(private router: ActivatedRoute, private demo: DemoService, private http: HttpClient) { }
    public cards: Card[] = [];

  ngOnInit() {
      this.demo.getPlaylist().subscribe((data) => {
          for (let i = 0; i < data.length; i++) {
              this.cards.push(data[i].toCard());
          }
      });

      this.router.paramMap
          .subscribe(params => {
              if(params.get('action') === 'add') {
                  const id: number = +params.get('pl_id'); // The + just performs the conversion.
                  const song_id: number = +params.get('song_id');

                  this.add(id, song_id);
              }

          });
  }

  public add(id: number, song_id: number) {
        this.demo.getPlaylist().subscribe(playlists => {
            for (const playlist of playlists) {
                if (playlist.id === id) {
                    this.demo.getSongs().subscribe(songs => {
                        for (const song of songs) {
                            if (song.id === song_id) {
                                playlist.songs.push(song.id);
                            }
                        }
                        console.log(playlist);
                        this.demo.lockPlaylist(playlists);
                    });
                }
            }
        });
  }
}
