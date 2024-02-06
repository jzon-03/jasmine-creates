import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../../../services/nasa-api.service';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-picture-of-the-day',
  templateUrl: './picture-of-the-day.component.html',
  styleUrl: './picture-of-the-day.component.css'
})
export class PictureOfTheDayComponent implements OnInit {

  apod: any;
  imgSrc: string = "";
  mode: ProgressBarMode = 'query';

  constructor(
    private _nasaService: NasaApiService
  ) { }

  ngOnInit(): void {
    this.executeAfterTwoSeconds(this.getAPOD);
  }

  private getAPOD = () => {
    this._nasaService.getAPOD().subscribe({
      next: (res) => {
        this.apod = Object(res);
        console.log(this.apod);
        this.mode = 'determinate';
      },
      error: (err) => {
        console.log("Error: " + err)
      }
    })
  }

  private executeAfterTwoSeconds(func: () => void): void {
    setTimeout(func, 2000);
  }
}
