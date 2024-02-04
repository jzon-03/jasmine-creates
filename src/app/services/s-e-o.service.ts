import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(
    private meta: Meta
  ) { }

  updateOGtitle(ogTitle: string = "Jasmine Creates"){
    this.meta.updateTag({property: 'og:title', content: ogTitle});
  }

  updateOGImage(imgUrl: string = "https://lh3.googleusercontent.com/pw/ABLVV87h7xRlIytcZqTVZTeBgu0YfsvdsftO7NmCd8hcH-IPTkj67lAy4xx1ayHvLUJiFMIsq6VgzbcYDVS6FydCHQledGl8p8ChaD7CnqAytiQWOgC5WXZn"){
    this.meta.updateTag({property: 'og:image', content: imgUrl});
  }

  updateOGDescription(ogDescription: string = "Jasmine's Colorful World: A Symphony of Crayons"){
    this.meta.updateTag({property: 'og:description', content: ogDescription});
  }

  updateOGUrl(OgUrl: string = "https://jzon-03.github.io/jasmine-creates/"){
    this.meta.updateTag({property: 'og:url', content: OgUrl});
  }
}
