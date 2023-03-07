import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToKatiAlloComponent } from './to-kati-allo.component';

describe('ToKatiAlloComponent', () => {
  let component: ToKatiAlloComponent;
  let fixture: ComponentFixture<ToKatiAlloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToKatiAlloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToKatiAlloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
