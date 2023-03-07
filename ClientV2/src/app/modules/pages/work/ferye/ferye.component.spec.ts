import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeryeComponent } from './ferye.component';

describe('FeryeComponent', () => {
  let component: FeryeComponent;
  let fixture: ComponentFixture<FeryeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeryeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeryeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
