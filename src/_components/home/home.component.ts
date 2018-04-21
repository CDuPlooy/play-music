import { Component, OnInit } from '@angular/core';
import {Card} from '../../_models';
import {HttpClient} from '@angular/common/http';
import {DemoService} from '../../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private demo: DemoService, private http: HttpClient) { }
    public cards: Card[] = [];

    ngOnInit() {
        this.demo.getArtists().subscribe((artist) => {
            for (let i = 0; i < artist.length; i++) {
                this.cards.push(artist[i].toCard());
            }
        });
    }

}
