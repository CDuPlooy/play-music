import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SongComponent} from '../_components/song/song.component';
import {AlbumComponent} from '../_components/album/album.component';
import {PlaylistComponent} from '../_components/playlist/playlist.component';
import {UserComponent} from '../_components/user/user.component';
import {AppComponent} from './app.component';
import {NowplayingComponent} from '../_components/nowplaying/nowplaying.component';
import {ArtistComponent} from '../_components/artist/artist.component';
import {AlbumviewComponent} from '../_components/albumview/albumview.component';
import {HomeComponent} from '../_components/home/home.component';

const routes: Routes = [
  {path: 'songs', component: SongComponent},
  {path: 'albums', component: AlbumComponent},
  {path: 'playlists', component: PlaylistComponent},
  {path: 'users', component: UserComponent},
  {path: 'nowplaying', component: NowplayingComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'album/:id', component: AlbumviewComponent},
  {path: '#', component: HomeComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
