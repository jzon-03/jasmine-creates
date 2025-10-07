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
  private autoAdsEnabled = true; // Auto Ads are enabled globally

  constructor() { }

  initializeAdsense(): void {
    if (!this.adsbygoogleInitialized) {
      this.adsbygoogleInitialized = true;
    }
  }

  pushAd(): void {
    // Skip manual ad initialization when Auto Ads are enabled
    if (this.autoAdsEnabled) {
      console.log('AdSense: Auto Ads enabled - skipping manual ad initialization');
      return;
    }
    
    setTimeout(() => {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }, 100);
  }

  setAutoAdsEnabled(enabled: boolean): void {
    this.autoAdsEnabled = enabled;
  }
}
