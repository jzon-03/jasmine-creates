import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-home-section2',
  templateUrl: './home-section2.component.html',
  styleUrl: './home-section2.component.css'
})
export class HomeSection2Component implements AfterViewInit {
  @ViewChild('text', { static: true }) public text!: ElementRef;
  ngAfterViewInit(): void {
    this.animateSVG();
  }

  animateSVG(){
    this.animate();
  }

  private animate(){
    anime({
      targets: 'svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration:2000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    });
  }
}
