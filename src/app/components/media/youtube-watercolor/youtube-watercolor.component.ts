import { Component, OnInit } from '@angular/core';
import { LocalJsonService } from '../../../services/local-json.service';

@Component({
    selector: 'app-youtube-watercolor',
    templateUrl: './youtube-watercolor.component.html',
    styleUrl: './youtube-watercolor.component.css',
    standalone: false
})
export class YoutubeWatercolorComponent implements OnInit {

  ytLinks: any[] = [];
  constructor(
    private _localJson: LocalJsonService
  ){}

  ngOnInit(): void {
    this._localJson.getYoutubeWatercolorLinks().subscribe({
      next:(res)=>{
        this.ytLinks = Object.values(res);
        console.log(this.ytLinks);
      }
    })
  }
}
