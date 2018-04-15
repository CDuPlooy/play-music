import {Card} from "../card/card";

export class Song {
  public id: number;
  public name: string;
  public artist: string;
  public duration: number;
  public likes: number;
  public dislikes: number;
  public src: string;

  public constructor(id: number, name: string, artist: string, time: number, likes: number, dislikes: number, img: string) {
      this.id = id;
      this.name = name;
      this.artist = artist;
      this.duration = time;
      this.likes = likes;
      this.dislikes = dislikes;
      this.src = img;
  }

  static parse(data: JSON): Song {
    return new Song(data['id'], data['name'], data['artist'], data['duration'], data['likes'], data['dislikes'], data['img']);
  }

    public toCard(): Card {
        return new Card(this.name, this.artist, this.src);
    }
}
