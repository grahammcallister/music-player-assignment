import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  apiUrl: string

  constructor(private http: HttpClient) { 
      this.apiUrl = environment.deezer.api;
  }

  public GetArtist(artistId: string): any {
      return this.httpGet("/artist/" + artistId);
  }

  public GetAlbum(albumId: string): any {
    return this.httpGet("/album/" + albumId);
  }

  public Search(searchTerm: string): any {
    return this.httpGet("/search?q=" + searchTerm);
  }

  private httpGet(endpoint: string): any {
    return this.http.get<any>(this.apiUrl + endpoint);
    /*.subscribe({
        next: data => {
            this.data = data;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    }); */
  }
}

export interface Artist {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface Genre {
    id: number;
    name: string;
    picture: string;
    type: string;
}

export interface Genres {
    data: Genre[];
}

export interface Contributor {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: string;
    role: string;
}

export interface Track {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    md5_image: string;
    artist: Artist;
    type: string;
}

export interface Tracks {
    data: Track[];
}

export interface Album {
    id: number;
    title: string;
    upc: string;
    link: string;
    share: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    genre_id: number;
    genres: Genres;
    label: string;
    nb_tracks: number;
    duration: number;
    fans: number;
    release_date: string;
    record_type: string;
    available: boolean;
    tracklist: string;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    contributors: Contributor[];
    artist: Artist;
    type: string;
    tracks: Tracks;
}

