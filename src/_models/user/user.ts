import {Playlist} from '../';
import {Deserialize, deserializeAs, serializeAs} from 'cerialize';
import {Artist} from '../artist/artist';

export class User {
  @deserializeAs('id') @serializeAs('id') public id: number;
  @deserializeAs('name') @serializeAs('name') public name: string;
  @deserializeAs('playlist') @serializeAs('playlist') public playlists: number[];
  @deserializeAs('img') @serializeAs('img') public img: string;

  public constructor() {
  }

    static parse(data: JSON): User {
        console.log(data);
        let user: User = new User();
        user = Deserialize(data, User);
        return user;
    }
}
