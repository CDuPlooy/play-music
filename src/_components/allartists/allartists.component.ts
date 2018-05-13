import { Component, OnInit } from '@angular/core';
import {Card} from '../../_models';
import {HttpClient} from '@angular/common/http';
import {DemoService} from '../../_services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-allartists',
  templateUrl: './allartists.component.html',
  styleUrls: ['./allartists.component.css']
})
export class AllartistsComponent implements OnInit {

  constructor(private demo: DemoService, private http: HttpClient, private router: Router) { }
  public cards: Card[] = [];

  ngOnInit() {
      this.demo.getArtists().subscribe((artist) => {
          for (let i = 0; i < artist.length; i++) {
              this.cards.push(artist[i].toCard());
          }
      });
  }

  public open(name: string) {
        this.demo.getArtists().subscribe(artists => {
            for (const artist of artists) {
                if (artist.name === name){
                    this.router.navigate(['artist/view/' + artist.id]);
                }
            }
        });
  }

}
