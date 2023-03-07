import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyresLampoudisComponent } from './tyres-lampoudis.component';

describe('TyresLampoudisComponent', () => {
  let component: TyresLampoudisComponent;
  let fixture: ComponentFixture<TyresLampoudisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyresLampoudisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TyresLampoudisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
