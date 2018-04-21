import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Album, Artist, Card, Song} from '../../_models';
import {DemoService} from '../../_services';

@Component({
  selector: 'app-albumview',
  templateUrl: './albumview.component.html',
  styleUrls: ['./albumview.component.css']
})
export class AlbumviewComponent implements OnInit {
    constructor(private router: ActivatedRoute, private demo: DemoService) { }
    public id: string;
    public activeAlbum: Album;
    public cards: Card[];

    ngOnInit() {
        this.router.paramMap
            .subscribe(params => {
                const id: number = +params.get('id'); // The + just performs the conversion.
                this.load(id);
            });
    }

    public load(id: number) {
        this.demo.getAlbums().subscribe(albums => {
            for ( let i = 0; i < albums.length; i++) {
                const artist = albums[i];
                if (artist.id === id) {
                    this.activeAlbum = albums[i];
                    this.demo.getSongs().subscribe(songs => {
                        this.cards = [];
                        for ( let j = 0; j < songs.length; j++) {
                            console.log(songs[j]);
                            if (songs[j].album === this.activeAlbum.name) {
                                this.cards.push(songs[j].toCard());
                            }
                        }
                    });
                    break;
                }
            }
        });
    }
}
