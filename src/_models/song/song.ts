export class Song {
  public id: number;
  public name: string;
  public artist: string;
  public duration: number;
  public likes: number;
  public dislikes: number;

  public constructor() {
  }

  static parse(data: JSON): Song {
    return new Song();
  }
}
