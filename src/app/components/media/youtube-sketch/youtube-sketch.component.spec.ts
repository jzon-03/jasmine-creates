import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSketchComponent } from './youtube-sketch.component';

describe('YoutubeSketchComponent', () => {
  let component: YoutubeSketchComponent;
  let fixture: ComponentFixture<YoutubeSketchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoutubeSketchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoutubeSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
