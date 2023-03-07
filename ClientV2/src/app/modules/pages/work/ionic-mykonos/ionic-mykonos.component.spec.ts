import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicMykonosComponent } from './ionic-mykonos.component';

describe('IonicMykonosComponent', () => {
  let component: IonicMykonosComponent;
  let fixture: ComponentFixture<IonicMykonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicMykonosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IonicMykonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
