import { Injectable } from '@angular/core';
import { Song,Album,Playlist,User } from '../../_models';

@Injectable()
export class DemoService {

  constructor() { this.resetDemo(); }
  private songs: Song[];
  private albums: Album[];
  private users: User[];
  private playlist: Playlist[];

  public resetDemo(){
    this.songs = [];
    this.albums = [];
    this.users = [];
    this.playlist = [];
  }

  public initDemo(){
      // Initialise each array object with json from a static file server.
      this.resetDemo();
  }

  public getSongs(){

  }

}
