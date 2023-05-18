import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  spotifyToken = 'BQDuxxE6KFUJWxrzwgkDmGol2owe7E1rTrfKTYIT6Kx5wq2iaB551kQIRaSi5mlpJNC9RbGp97goVB9uWygIc6GrAlfHF-OJyslisB9adi-DUf4taJoP'

  constructor(private http:HttpClient) {   }
  getAlbums(albumId:string):Observable<any>{

    const headers = new HttpHeaders().set('Authorization',`Bearer ${this.spotifyToken}`)
    return this.http.get<any>(`albums/${albumId}`,{headers})
    }
  }
