export class Album {
    public name: string;

    public constructor(name: string){
        this.name = name;
    }

    static parse(data: JSON): Album {
        return new Album(data['name']);
    }
}
