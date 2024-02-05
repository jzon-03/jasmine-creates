import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SEOService } from '../../services/s-e-o.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent implements AfterViewInit, OnInit {

  constructor(
    private _seoService: SEOService,
    private _renderer: Renderer2
  ){ }
  
  ngOnInit(): void {
    this._seoService.updateOGUrl("https://jzon-03.github.io/jasmine-creates/media");
    this._seoService.updateOGImage("https://lh3.googleusercontent.com/pw/ABLVV85wiTlPhyq_VnSnKW9WfD4RWVV-QEjSvszWvYDU0h69yuaeswD7el4mU4rLc5AZbYYZwW-OoSZo9yA98qE2J7BIudo8HZzzUaaFN005Tj1HOy2kTN4o");
    this._seoService.updateOGDescription("Jasmine's colorful activities");
  }

  ngAfterViewInit(): void {
    const backgroundElement = document.querySelector('.media-bg') as HTMLDivElement;

    // Check if the element exists before setting the background-image
    if (backgroundElement) {
      // Set the background-image property
      backgroundElement.style.backgroundImage = 'url("assets/images/art_creative_repeat.png")';
    } else {
      console.error('Element with class .media-bg not found');
    }

  }
}
