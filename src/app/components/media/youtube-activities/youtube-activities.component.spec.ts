import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeActivitiesComponent } from './youtube-activities.component';

describe('YoutubeActivitiesComponent', () => {
  let component: YoutubeActivitiesComponent;
  let fixture: ComponentFixture<YoutubeActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoutubeActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoutubeActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
