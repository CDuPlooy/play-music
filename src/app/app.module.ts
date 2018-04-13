import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SongComponent } from '../_components/song/song.component';
import { AlbumComponent } from '../_components/album/album.component';
import { PlaylistComponent } from '../_components/playlist/playlist.component';
import { UserComponent } from '../_components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    AlbumComponent,
    PlaylistComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
