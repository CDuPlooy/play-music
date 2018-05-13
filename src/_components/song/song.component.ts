import { Component, OnInit, AfterViewInit} from '@angular/core';
import {DemoService, PlaymusicService} from '../../_services';
import {Card, Song} from '../../_models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import 'rxjs/add/observable/timer';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit, AfterViewInit {

    constructor(private router: Router, private demo: DemoService, private http: HttpClient, private playService: PlaymusicService) { }
    public cards: Card[] = [];
    public filter: string;
    public songs: Song[] = [];
    public playSubscription: ISubscription;

  ngOnInit() {
      this.filter = 'Type anything to search . . . ';
      this.demo.getSongs().subscribe((data) => {
          for (let i = 0; i < data.length; i++) {
              this.cards.push(data[i].toCard());
              this.songs.push(data[i]);
          }
      });
  }

  ngAfterViewInit() {
      const input = document.getElementById('searchBar');
      fromEvent(input, 'keydown').subscribe(e => {
          if (this.filter.indexOf('Type anything to search . . . ') !== -1) {
              this.filter = '';
          }
      });

      fromEvent(input, 'keyup').subscribe((e) => {
            if (this.filter.length === 0) {
                this.cards = [];
                for (let j = 0; j < this.songs.length; j++) {
                    this.cards.push(this.songs[j].toCard());
                }
            }

            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards[i].title.indexOf(this.filter) === -1 && this.cards[i].text.indexOf(this.filter) === -1) {
                    this.cards.splice(i, 1);
                }
            }
      });
  }

  public navigateArtist(t_artist: string) {
      this.demo.getArtists().subscribe(artists => {
           for (const artist of artists) {
               if (artist.name.toLowerCase() === t_artist.toLowerCase()) {
                   this.router.navigate(['/artist/view/' + artist.id]);
                   console.log('here');
               }
           }
        });
  }

  public play(song: string, artist: string) {
      const src = 'http://www.noiseaddicts.com/samples_1w72b820/280.mp3';
      const audio = new Audio(src);
      audio.play();
      this.playService.setProgress(0);

      this.playSubscription = Observable.timer(0, 500).subscribe(x => {
            this.playService.setProgress(Math.round(audio.currentTime / audio.duration * 100));
      });

      audio.addEventListener('ended', () => {
            this.playSubscription.unsubscribe();
            this.playService.setProgress(100);
      });
  }
}
