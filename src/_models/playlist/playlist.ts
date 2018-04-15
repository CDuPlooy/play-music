import {Song} from "../";

export class Playlist {
  public id: number;
  public name: string;
  public songs: Song[];
  public likes: number;
  public dislikes: number;

  public constructor(){
  }

  static parse(data: JSON): Playlist {
    return new Playlist();
  }
}
