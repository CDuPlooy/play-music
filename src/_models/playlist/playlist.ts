import {Song} from '../';
import {Card} from "../card/card";

export class Playlist {
  public id: number;
  public name: string;
  public songs: Song[];
  public likes: number;
  public dislikes: number;
  public src: string;
  public owner: string;

  public constructor(id: number, name: string, likes: number, dislikes: number, url: string, owner: string) {
    this.id = id;
    this.name = name;
    this.likes = likes;
    this.dislikes = dislikes;
    this.src = url;
    this.owner = owner;
  }

  static parse(data: JSON): Playlist {
      return new Playlist(data['id'], data['name'], data['likes'], data['dislikes'], data['img'], data['owner']);
  }

    public toCard(): Card {
        return new Card(this.name, this.name, this.src);
    }
}
