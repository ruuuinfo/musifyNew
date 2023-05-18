import { Component } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  albumsTrack : any;
  albums : any;
  gridDisplays:any;
  
  albumId: string ='4aawyAB9vmqN3uQ7FjRGTy'
  constructor(private album_service:AlbumService){}

  ngOnInit(){
    this.getAlbumTrack();
    this.getAlbum();
    this.gridDisplay();
  }

  getAlbum(){
    this.album_service.getAlbums(this.albumId).subscribe(response=>{
      this.albums = response
      console.log(this.albums)
    })
  }
  getAlbumTrack(){
    this.album_service.getAlbums(this.albumId).subscribe(albumss=>{
      this.albumsTrack = albumss.tracks.items.flatMap(
        (track:any)=>
        track.artists
        );
      
        console.log('track test',this.albumsTrack)
      
      console.log('response albumss',albumss)
      console.log('albums item',this.albums)
      // console.log(this.albums)
    },
    (error)=>{
      console.log('Error',error)
    });
  }
  gridDisplay(){
    this.albumsTrack = {
      text : this.albumsTrack,col:4,color:'lightgreen'
    }
    console.log('grid display')
  }
}

// @Component({

// })