import { Component } from '@angular/core';
import { SEOService } from '../../services/s-e-o.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(
    private _seo: SEOService
  ){
    this._seo.updateOGDescription();
    this._seo.updateOGImage();
    this._seo.updateOGUrl();
    this._seo.updateOGtitle();
  }

}
