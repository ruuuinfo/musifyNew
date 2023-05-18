  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumComponent } from './album/album.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestHandlerInterceptor } from './request-handler.interceptor';
import { DesignModule } from './design/design.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsTrackComponent } from './album/albums-track/albums-track.component'



@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    NavbarComponent,
    HomeComponent,
    AlbumsTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DesignModule,
    HttpClientModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:RequestHandlerInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
