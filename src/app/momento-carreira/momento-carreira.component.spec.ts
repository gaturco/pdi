import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentoCarreiraComponent } from './momento-carreira.component';

describe('MomentoCarreiraComponent', () => {
  let component: MomentoCarreiraComponent;
  let fixture: ComponentFixture<MomentoCarreiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentoCarreiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentoCarreiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
