import {Song} from "../";

export class Album {
    public id: number;
    public name: string;
    public artist: string;
    public songs: Song[];

    public constructor(id:number, name: string, url: string){
        this.id = id;
        this.name = name;
    }

    static parse(data: JSON): Album {
        return new Album(data['id'], data['name'], data['img']);
    }
}
