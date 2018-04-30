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
import {SearchComponent} from '../_components/search/search.component';
import {SettingsComponent} from '../_components/settings/settings.component';

const routes: Routes = [
  {path: 'songs', component: SongComponent},
  {path: 'albums', component: AlbumComponent},
  {path: 'playlists', component: PlaylistComponent},
  {path: 'playlists/:action/:pl_id/:song_id', component: PlaylistComponent},
  {path: 'users/:id', component: UserComponent},
  {path: 'nowplaying', component: NowplayingComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'album/:id', component: AlbumviewComponent},
  {path: '#', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'settings', component: SettingsComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
