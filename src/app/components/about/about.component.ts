import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SEOService } from '../../services/s-e-o.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit, OnInit {

  constructor(
    private _seo: SEOService
  ){  }
  
  ngOnInit(): void {
    this._seo.updateOGDescription();
    this._seo.updateOGImageUrl();
    this._seo.updateOGUrl();
    this._seo.updateOGtitle();
  }
  
  ngAfterViewInit(): void {
    const backgroundElement = document.querySelector('.about-bg') as HTMLDivElement;

    // Check if the element exists before setting the background-image
    if (backgroundElement) {
      // Set the background-image property
      backgroundElement.style.backgroundImage = 'url("assets/images/heart_spiral.png")';
    } else {
      console.error('Element with class .background not found');
    }

  }

}
