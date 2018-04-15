import {Song} from '../';
import {Card} from '../card/card';

export class Album {
    public id: number;
    public name: string;
    public artist: string;
    public src: string;
    public songs: Song[];

    public constructor(id: number, name: string, artist: string, url: string) {
        this.id = id;
        this.name = name;
        this.src = url;
        this.artist = artist;
    }

    static parse(data: JSON): Album {
        return new Album(data['id'], data['name'], data['artist'], data['img']);
    }

    public toCard(): Card {
        return new Card(this.name, this.artist, this.src);
    }
}
