import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoMeVejoComponent } from './como-me-vejo.component';

describe('ComoMeVejoComponent', () => {
  let component: ComoMeVejoComponent;
  let fixture: ComponentFixture<ComoMeVejoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoMeVejoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoMeVejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
