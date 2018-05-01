import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DemoService} from '../../_services';
import {Artist, Card} from '../../_models';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private r: Router, private router: ActivatedRoute, private demo: DemoService) { }
  public id: string;
  public activeArtist: Artist;
  public cards: Card[];

  ngOnInit() {
    this.router.paramMap
        .subscribe(params => {
          const id: number = +params.get('id'); // The + just performs the conversion.
          if (params.get('action') === 'view') {
              this.load(id);
          }
        });
  }

  public load(id: number) {
    this.demo.getArtists().subscribe(artists => {
      for ( let i = 0; i < artists.length; i++) {
        const artist = artists[i];
        if (artist.id === id) {
          this.activeArtist = artists[i];
          this.demo.getAlbums().subscribe(albums => {
            this.cards = [];
              for ( let j = 0; j < albums.length; j++) {
                  if (albums[j].artist.toUpperCase() === this.activeArtist.name.toUpperCase()) {
                    this.cards.push(albums[j].toCard());
                  }
                }
              });
          break;
        }
      }
    });
  }

  public nav(id: string) {
    this.r.navigate(['localhost:4200/artist/view/' + id]);
  }

}
