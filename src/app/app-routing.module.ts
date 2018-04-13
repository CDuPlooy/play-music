import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SongComponent} from '../_components/song/song.component';
import {AlbumComponent} from '../_components/album/album.component';
import {PlaylistComponent} from '../_components/playlist/playlist.component';
import {UserComponent} from '../_components/user/user.component';

const routes: Routes = [
  {path: 'songs', component: SongComponent},
  {path: 'albums', component: AlbumComponent},
  {path: 'playlists', component: PlaylistComponent},
  {path: 'users', component: UserComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
