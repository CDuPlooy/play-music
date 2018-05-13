import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlaylistComponent, UserComponent, AlbumComponent, SongComponent, SongcardsComponent } from '../_components';
import { NavbarComponent, PlaybarComponent } from '../_shared';

import {DemoService, PlaymusicService} from '../_services/';
import { HttpClientModule } from '@angular/common/http';
import { NowplayingComponent } from '../_components/nowplaying/nowplaying.component';
import { ArtistComponent } from '../_components/artist/artist.component';
import { AlbumviewComponent } from '../_components/albumview/albumview.component';
import { HomeComponent } from '../_components/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from '../_components/search/search.component';
import {FormsModule} from '@angular/forms';
import { SettingsComponent } from '../_components/settings/settings.component';
import { DevicesComponent } from '../_components/devices/devices.component';
import {PlaylistviewComponent} from '../_components/playlistview/playlistview.component';
import { CommunityComponent } from '../_components/community/community.component';
import { AllartistsComponent } from '../_components/allartists/allartists.component';
import { DebugComponent } from '../_components/debug-component/debug-component.component';
import { FamilyComponent } from '../_components/family/family.component';

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
    SearchComponent,
    SettingsComponent,
    DevicesComponent,
    PlaylistviewComponent,
    CommunityComponent,
    AllartistsComponent,
    DebugComponent,
    FamilyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [DemoService, PlaymusicService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
