import { Component, OnInit } from '@angular/core';
import { LocalJsonService } from '../../../services/local-json.service';

@Component({
    selector: 'app-youtube-crafts',
    templateUrl: './youtube-crafts.component.html',
    styleUrl: './youtube-crafts.component.css',
    standalone: false
})
export class YoutubeCraftsComponent implements OnInit {

  constructor(
    private _localJson: LocalJsonService
  ){}

  ytLinks: any;

  ngOnInit(): void {
    this._localJson.getYoutubeCraftsLinks().subscribe({
      next:(res)=>{
        this.ytLinks = res;
      }
    })
  }
}
