import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeCraftsComponent } from './youtube-crafts.component';

describe('YoutubeCraftsComponent', () => {
  let component: YoutubeCraftsComponent;
  let fixture: ComponentFixture<YoutubeCraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoutubeCraftsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoutubeCraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
