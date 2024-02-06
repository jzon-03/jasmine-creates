import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEclipseComponent } from './total-eclipse.component';

describe('TotalEclipseComponent', () => {
  let component: TotalEclipseComponent;
  let fixture: ComponentFixture<TotalEclipseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalEclipseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalEclipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
