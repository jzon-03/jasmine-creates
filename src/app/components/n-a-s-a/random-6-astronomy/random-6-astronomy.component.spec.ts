import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Random6AstronomyComponent } from './random-6-astronomy.component';

describe('Random6AstronomyComponent', () => {
  let component: Random6AstronomyComponent;
  let fixture: ComponentFixture<Random6AstronomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Random6AstronomyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Random6AstronomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
