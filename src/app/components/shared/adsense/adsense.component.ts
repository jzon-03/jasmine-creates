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

  constructor(private adsenseService: AdsenseService) {}

  ngOnInit(): void {
    this.adsenseService.initializeAdsense();
  }

  ngAfterViewInit(): void {
    this.adsenseService.pushAd();
  }
}
