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
import {PlaylistviewComponent} from '../_components/playlistview/playlistview.component';
import {CommunityComponent} from '../_components/community/community.component';
import {AllartistsComponent} from '../_components/allartists/allartists.component';
import {DebugComponent} from '../_components/debug-component/debug-component.component';
import {FamilyComponent} from '../_components/family/family.component';

const routes: Routes = [
  {path: 'songs', component: SongComponent},
  {path: 'albums', component: AlbumComponent},
  {path: 'playlists', component: PlaylistComponent},
  {path: 'playlists/:action/:pl_id/:song_id', component: PlaylistComponent},
  {path: 'playlists/:action/:id', component: PlaylistviewComponent},
  {path: 'users/:id', component: UserComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'nowplaying', component: NowplayingComponent},
  {path: 'artists', component: AllartistsComponent},
  {path: 'artist/:action/:id', component: ArtistComponent},
  {path: 'album/:action/:id', component: AlbumviewComponent},
  {path: '#', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'reset', component: DebugComponent},
  {path: 'family', component: FamilyComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
