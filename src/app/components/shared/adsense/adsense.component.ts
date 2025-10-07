import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { AdsenseService } from '../../../services/adsense.service';

@Component({
  selector: 'app-adsense',
  standalone: false,
  templateUrl: './adsense.component.html',
  styleUrl: './adsense.component.css'
})
export class AdsenseComponent implements OnInit, AfterViewInit {
  @Input() adClient: string = 'ca-pub-7601194250852039';
  @Input() adSlot: string = '';
  @Input() adFormat: string = 'auto';
  @Input() fullWidthResponsive: boolean = true;
  @Input() display: string = 'block';
  @Input() disabled: boolean = false; // Allow disabling ads in development

  showAd: boolean = false;

  constructor(private adsenseService: AdsenseService) {}

  ngOnInit(): void {
    // Only show ads if we have a valid ad slot and not disabled
    this.showAd = !this.disabled && !!this.adSlot && this.adSlot !== '' && !this.isPlaceholderSlot();
    
    if (this.showAd) {
      this.adsenseService.initializeAdsense();
      console.log('AdSense component initialized for slot:', this.adSlot);
    }
  }

  ngAfterViewInit(): void {
    if (this.showAd) {
      this.adsenseService.pushAd();
    }
  }

  private isPlaceholderSlot(): boolean {
    // Check if it's a placeholder slot ID
    const placeholderSlots = ['1234567890', '0987654321', 'YOUR_AD_SLOT_ID'];
    return placeholderSlots.includes(this.adSlot);
  }
}
