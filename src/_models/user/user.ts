export class User {
  public id: number;
  public name: string;
  public playlists: Playlist[];
  public recommended: Playlist[];

  public constructor(){
  }

  static parse(data: JSON): Album {
  }
}
