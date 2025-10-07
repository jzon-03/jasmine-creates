import { Injectable } from '@angular/core';

declare let adsbygoogle: any;
declare global {
  interface Window {
    adsbygoogle: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdsenseService {
  private adsbygoogleInitialized = false;

  constructor() { }

  initializeAdsense(): void {
    if (!this.adsbygoogleInitialized) {
      this.adsbygoogleInitialized = true;
    }
  }

  pushAd(): void {
    setTimeout(() => {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }, 100);
  }
}
