import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOServiceService {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  updateOGtitle(ogTitle: string){
    this.meta.updateTag({property: 'og:title', content: ogTitle});
  }
}
