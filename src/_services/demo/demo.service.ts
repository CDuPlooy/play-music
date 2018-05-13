import {Injectable} from '@angular/core';
import {Song, Album, Playlist, User, Artist} from '../../_models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) {
    }

    private songs: Song[] = null;
    private users: User[] = null;
    private playlist: Playlist[] = null;
    private featured: Playlist[] = null;
    private albums: Album[] = null;
    private artists: Artist[] = null;

    public unlock() {
        this.unlockAlbums();
        this.unlockArtist();
        this.unlockFeatured();
        this.unlockPlaylist();
        this.unlockSongs();
        this.unlockUsers();
    }

    public lockSongs(songs: Song[]) {
        this.songs = songs;
    }


    public unlockSongs() {
        this.songs = null;
    }


    public lockUsers(users: User[]) {
        this.users = users;
    }

    public unlockUsers() {
        this.users = null;
    }

    public lockPlaylist(playlist: Playlist[]) {
        this.playlist = playlist;
    }

    public unlockPlaylist() {
        this.playlist = null;
    }

    public lockFeatured(playlist: Playlist[]) {
        this.featured = playlist;
    }

    public unlockFeatured() {
        this.playlist = null;
    }

    public lockAlbums(album: Album[]) {
        this.albums = album;
    }

    public unlockAlbums() {
        this.albums = null;
    }

    public lockArtists(artist: Artist[]) {
        this.artists = artist;
    }

    public unlockArtist() {
        this.albums = null;
    }

    public getSongs(): Observable<Song[]> {
        const url = 'https://raw.githubusercontent.com/DowntownCookieFrenzy/play-music-json/master/demo.json';
        if (this.songs != null) {
            return Observable.create((obvs) => {
                obvs.next(this.songs);
            });
        } else {
            const obvs: Observable<JSON> = this.http.get<JSON>(url, {responseType: 'json'});
            return obvs.pipe(
                map((data) => {
                    data = data['Songs'];
                    const songs: Song[] = [];
                    for (let i = 0; i < Object.keys(data).length; i++) {
                        songs.push(Song.parse(data[i]));
                    }
                    this.lockSongs(songs);
                    return songs;
                })
            );
        }
    }

    public getArtists(): Observable<Artist[]> {
        const url = 'https://raw.githubusercontent.com/DowntownCookieFrenzy/play-music-json/master/demo.json';
        if (this.artists != null) {
            return Observable.create((obvs) => {
                obvs.next(this.artists);
            });
        } else {
            const obvs: Observable<JSON> = this.http.get<JSON>(url, {responseType: 'json'});
            return obvs.pipe(
                map((data) => {
                    data = data['Artists'];
                    const artists: Artist[] = [];
                    for (let i = 0; i < Object.keys(data).length; i++) {
                        artists.push(Artist.parse(data[i]));
                    }
                    this.lockArtists(artists);
                    return artists;
                })
            );
        }
    }

    public getAlbums(): Observable<Album[]> {
        const url = 'https://raw.githubusercontent.com/DowntownCookieFrenzy/play-music-json/master/demo.json';
        if (this.albums != null) {
            return Observable.create((obvs) => {
                obvs.next(this.albums);
            });
        } else {
            const obvs: Observable<JSON> = this.http.get<JSON>(url, {responseType: 'json'});
            return obvs.pipe(
                map((data) => {
                    data = data['Albums'];
                    const albums: Album[] = [];
                    for (let i = 0; i < Object.keys(data).length; i++) {
                        albums.push(Album.parse(data[i]));
                    }
                    this.lockAlbums(albums);
                    return albums;
                })
            );
        }
    }

    public getPlaylist(): Observable<Playlist[]> {
        const url = 'https://raw.githubusercontent.com/DowntownCookieFrenzy/play-music-json/master/demo.json';
        if (this.playlist != null) {
            return Observable.create((obvs) => {
                obvs.next(this.playlist);
            });
        } else {
            const obvs: Observable<JSON> = this.http.get<JSON>(url, {responseType: 'json'});
            return obvs.pipe(
                map((data) => {
                    data = data['Playlists'];
                    const playlists: Playlist[] = [];
                    for (let i = 0; i < Object.keys(data).length; i++) {
                        playlists.push(Playlist.parse(data[i]));
                    }
                    this.lockPlaylist(playlists);
                    return playlists;
                })
            );
        }
    }

    public getUsers(): Observable<User[]> {
        const url = 'https://raw.githubusercontent.com/DowntownCookieFrenzy/play-music-json/master/demo.json';
        if (this.users != null) {
            return Observable.create((obvs) => {
                obvs.next(this.users);
            });
        } else {
            const obvs: Observable<JSON> = this.http.get<JSON>(url, {responseType: 'json'});
            return obvs.pipe(
                map((data) => {
                    data = data['Users'];
                    const user: User[] = [];
                    for (let i = 0; i < Object.keys(data).length; i++) {
                        user.push(User.parse(data[i]));
                    }
                    this.lockUsers(user);
                    return user;
                })
            );
        }
    }
}
