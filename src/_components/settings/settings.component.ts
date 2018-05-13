import { Component, OnInit } from '@angular/core';
import {Album, Artist} from '../../_models';
import {DemoService} from '../../_services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public blockee: string;
  public artists: string[] = [];
  constructor(private demo: DemoService, private router: Router) { }

  ngOnInit() {
  }

  public viewFamily() {
    this.router.navigate(['family']);
  }

  public block() {
    console.log(this.blockee);
    if (this.blockee.length !== 0) {
        this.artists.push(this.blockee);
        // Remove the albums containing the artist.
        this.demo.getAlbums().subscribe(albums => {
            for (const album of albums) {
                if (album.artist.toLowerCase() === this.blockee.toLowerCase()) {
                    albums.splice(albums.indexOf(album), 1);
                }
            }
            this.demo.lockAlbums(albums);
        });
        // Remove the artist.
        this.demo.getArtists().subscribe(artists => {
            for (const artist of artists) {
                if (artist.name.toLowerCase() === this.blockee.toLowerCase()) {
                    artists.splice(artists.indexOf(artist), 1);
                }
            }
            this.demo.lockArtists(artists);
        });
        // Remove any songs by the artist
        this.demo.getSongs().subscribe(songs => {
            for (const song of songs) {
                if (song.artist.toLowerCase() === this.blockee.toLowerCase()) {
                    songs.splice(songs.indexOf(song), 1);
                }
            }
            this.demo.lockSongs(songs);
        });
    }
    this.blockee = '';
  }
}
