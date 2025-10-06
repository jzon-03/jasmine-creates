import { Component, OnInit } from '@angular/core';
import { LocalJsonService } from '../../../services/local-json.service';

@Component({
    selector: 'app-youtube-activities',
    templateUrl: './youtube-activities.component.html',
    styleUrl: './youtube-activities.component.css',
    standalone: false
})
export class YoutubeActivitiesComponent implements OnInit {

  constructor(
    private _localJson: LocalJsonService
  ){}

  ytLinks: any;

  ngOnInit(): void {
    this._localJson.getYoutubeActivitiesLinks().subscribe({
      next:(res)=>{
        this.ytLinks = res;
      }
    })
  }
}
