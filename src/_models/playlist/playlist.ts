import {Song} from '../';
import {Card} from '../card/card';
import {Deserialize, deserializeAs, serializeAs} from 'cerialize';
import {Artist} from '../artist/artist';

export class Playlist {
  @deserializeAs('id') @serializeAs('id') public id: number;
  @deserializeAs('name') @serializeAs('name') public name: string;
  @deserializeAs('img') @serializeAs('img') public src: string;

  public songs: Song[];
  public likes: number;
  public dislikes: number;
  public owner: string;

  public constructor() {

  }

  static parse(data: JSON): Playlist {
      let playlist: Playlist = new Playlist();
      playlist = Deserialize(data, Playlist);
      return playlist;
  }

    public toCard(): Card {
        return new Card(this.name, this.name, this.src);
    }
}
