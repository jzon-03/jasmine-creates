import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-base-nav',
  templateUrl: './base-nav.component.html',
  styleUrl: './base-nav.component.css'
})
export class BaseNavComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const backgroundElement = document.querySelector('.base-nav-bg') as HTMLDivElement;

    // Check if the element exists before setting the background-image
    if (backgroundElement) {
      // Set the background-image property
      backgroundElement.style.backgroundImage = 'url("assets/images/squigly_repeat.png")';
    } else {
      console.error('Element with class .base-nav-bg not found');
    }

  }
}
