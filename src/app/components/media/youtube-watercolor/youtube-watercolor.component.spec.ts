import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeWatercolorComponent } from './youtube-watercolor.component';

describe('YoutubeWatercolorComponent', () => {
  let component: YoutubeWatercolorComponent;
  let fixture: ComponentFixture<YoutubeWatercolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoutubeWatercolorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoutubeWatercolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
