import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  apiUrl: string
  errorMessage: string
  data: any

  constructor(private http: HttpClient) { 
      this.apiUrl = environment.deezer.api;
      this.errorMessage = "";
  }

  private httpGet(endpoint: string): void {
    this.http.get<any>(this.apiUrl + endpoint).subscribe({
        next: data => {
            this.data = data;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });
  }
}
