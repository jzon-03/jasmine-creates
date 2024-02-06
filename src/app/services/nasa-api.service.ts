import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api_key = "JQGdlnvzAQ9kAq7oaWqBnq4e55tqC4vBFIDvLEm7";
const url = "https://api.nasa.gov/planetary/apod";

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  constructor(
    private _http: HttpClient
  ) { }
  
  getAPOD(){
    return this._http.get(url + "?api_key=" + api_key);
  }

  get6Random(){
    return this._http.get(url + "?api_key=" + api_key + "&count=6");
  }
}
