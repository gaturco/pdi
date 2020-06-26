import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassosComponent } from './passos.component';

describe('PassosComponent', () => {
  let component: PassosComponent;
  let fixture: ComponentFixture<PassosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
