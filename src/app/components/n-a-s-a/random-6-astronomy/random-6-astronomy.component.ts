import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { NasaApiService } from '../../../services/nasa-api.service';

@Component({
  selector: 'app-random-6-astronomy',
  templateUrl: './random-6-astronomy.component.html',
  styleUrl: './random-6-astronomy.component.css'
})
export class Random6AstronomyComponent implements OnInit {

  random6: any;
  imgSrc: string = "";
  mode: ProgressBarMode = 'query';

  constructor(
    private _nasaService: NasaApiService
  ) { }

  ngOnInit(): void {
    this.executeAfterTwoSeconds(this.getAPOD);
  }

  private getAPOD = () => {
    this._nasaService.get6Random().subscribe({
      next: (res) => {
        this.random6 = Object.values(res);
        console.log(this.random6);
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
