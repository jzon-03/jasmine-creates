import { Component, OnInit } from '@angular/core';
import { LocalJsonService } from '../../../services/local-json.service';

@Component({
    selector: 'app-youtube-sketch',
    templateUrl: './youtube-sketch.component.html',
    styleUrl: './youtube-sketch.component.css',
    standalone: false
})
export class YoutubeSketchComponent implements OnInit {

  ytLinks: any[] = [];
  constructor(
    private _localJson: LocalJsonService
  ){}

  ngOnInit(): void {
    this._localJson.getYoutubeSketchLinks().subscribe({
      next:(res)=>{
        this.ytLinks = Object.values(res);
        console.log(this.ytLinks);
      }
    })
  }
}
