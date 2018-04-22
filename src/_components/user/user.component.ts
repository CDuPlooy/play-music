import { Component, OnInit } from '@angular/core';
import {Album, Card, User} from '../../_models';
import {ActivatedRoute} from '@angular/router';
import {DemoService} from '../../_services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    constructor(private router: ActivatedRoute, private demo: DemoService) { }
    public id: string;
    public activeUser: User;
    public cards: Card[];

    ngOnInit() {
        this.router.paramMap
            .subscribe(params => {
                const id: number = +params.get('id'); // The + just performs the conversion.
                this.load(id);
            });
    }

    public load(id: number) {
        this.demo.getUsers().subscribe(users => {
            for ( let i = 0; i < users.length; i++) {
                const user = users[i];
                if (user.id === id) {
                    this.activeUser = users[i];
                    this.demo.getPlaylist().subscribe(playlists => {
                        this.cards = [];
                        for ( let j = 0; j < playlists.length; j++) {
                            if (this.activeUser.playlists.indexOf(playlists[j].id) !== -1) {
                                this.cards.push(playlists[j].toCard());
                            }
                        }
                    });
                    break;
                }
            }
        });
    }
}
