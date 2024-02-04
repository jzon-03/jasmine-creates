import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalJsonService {

  constructor(
    private _http: HttpClient
  ) { }

  getYoutubeSketchLinks(){
    return this._http.get('assets/json/youtube-sketch.json');
  }

  getYoutubeWatercolorLinks(){
    return this._http.get('assets/json/youtube-watercolor.json')
  }

  getYoutubeActivitiesLinks(){
    return this._http.get('assets/json/youtube-activities.json')
  }

  getYoutubeCraftsLinks(){
    return this._http.get('assets/json/youtube-crafts.json')
  }
}
