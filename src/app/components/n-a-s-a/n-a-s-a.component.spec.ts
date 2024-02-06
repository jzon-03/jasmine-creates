import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NASAComponent } from './n-a-s-a.component';

describe('NASAComponent', () => {
  let component: NASAComponent;
  let fixture: ComponentFixture<NASAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NASAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NASAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
