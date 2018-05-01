import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DemoService} from '../../_services';
import {Artist, Card, Playlist} from '../../_models';

@Component({
    selector: 'app-playlistview',
    templateUrl: './playlistview.component.html',
    styleUrls: ['./playlistview.component.css']
})
export class PlaylistviewComponent implements OnInit {

    constructor(private r: Router, private router: ActivatedRoute, private demo: DemoService) {
    }

    public id: string;
    public activePlaylist: Playlist;
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
        this.cards = [];
        this.demo.getPlaylist().subscribe(playlists => {
            for (const playlist of playlists) {
                if (playlist.id === id) {
                    // Get a list of all the songs and display
                    this.activePlaylist = playlist;
                    this.demo.getSongs().subscribe(songs => {
                        for (const song of songs) {
                            if (playlist.songs.indexOf(song.id) !== -1){
                                this.cards.push(song.toCard());
                            }
                        }
                    });
                }
            }
        });
        console.log(this.cards);
    }
}
