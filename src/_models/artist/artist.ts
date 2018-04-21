import {Deserialize, deserializeAs, serializeAs} from 'cerialize';
import {Card} from '../card/card';

export class Artist {
    @deserializeAs('id') @serializeAs('id') public id: number;
    @deserializeAs('name') @serializeAs('name') public name: string;
    @deserializeAs('about') @serializeAs('about') public about: string;
    @deserializeAs('img') @serializeAs('img') public img: string;


    constructor() {}

    static parse(data: JSON): Artist {
        let artist: Artist = new Artist();
        artist = Deserialize(data, Artist);
        return artist;
    }

    public toCard(): Card {
        return new Card(this.name, '', this.img);
    }
}
