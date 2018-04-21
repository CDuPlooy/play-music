import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlaylistComponent, UserComponent, AlbumComponent, SongComponent, SongcardsComponent } from '../_components';
import { NavbarComponent, PlaybarComponent } from '../_shared';

import { DemoService } from '../_services/';
import { HttpClientModule } from '@angular/common/http';
import { NowplayingComponent } from '../_components/nowplaying/nowplaying.component';
import { ArtistComponent } from '../_components/artist/artist.component';
import { AlbumviewComponent } from '../_components/albumview/albumview.component';
import { HomeComponent } from '../_components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    AlbumComponent,
    PlaylistComponent,
    UserComponent,
    NavbarComponent,
    PlaybarComponent,
    SongcardsComponent,
    NowplayingComponent,
    ArtistComponent,
    AlbumviewComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
