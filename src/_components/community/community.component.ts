import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private router: Router) { }

  goArtists() {
    this.router.navigate(['../artists']);
  }

    goSongs() {
        this.router.navigate(['../songs']);
    }

  ngOnInit() {
  }

}
