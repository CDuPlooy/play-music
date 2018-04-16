import {Card} from '../card/card';
import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';

export class Song {
  @deserializeAs('id') @serializeAs('id') public id: number;
  @deserializeAs('name') @serializeAs('name') public name: string;
  @deserializeAs('artist') @serializeAs('artist') public artist: string;
  @deserializeAs('duration') @serializeAs('duration') public duration: number;
  @deserializeAs('likes') @serializeAs('likes') public likes: number;
  @deserializeAs('dislikes') @serializeAs('dislikes') public dislikes: number;
  @deserializeAs('img') @serializeAs('img') public src: string;

  public constructor() {}

  static parse(data: JSON): Song {
        let song: Song = new Song();
        song = Deserialize(data, Song);
        return song;
  }

  public toCard(): Card {
      return new Card(this.name, this.artist, this.src);
  }
}
