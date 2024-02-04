import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(
    private meta: Meta
  ) { }

  updateOGtitle(ogTitle: string){
    this.meta.updateTag({property: 'og:title', content: ogTitle});
  }

  updateOGImage(imgUrl: string){
    this.meta.updateTag({property: 'og:image', content: imgUrl});
  }

  updateOGDescription(ogDescription: string){
    this.meta.updateTag({property: 'og:description', content: ogDescription});
  }

  updateOGUrl(OgUrl: string){
    this.meta.updateTag({property: 'og:url', content: OgUrl});
  }
}
