import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlioramaComponent } from './oliorama.component';

describe('OlioramaComponent', () => {
  let component: OlioramaComponent;
  let fixture: ComponentFixture<OlioramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlioramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlioramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
