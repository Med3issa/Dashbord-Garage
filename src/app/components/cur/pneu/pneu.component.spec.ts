import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PneuComponent } from './pneu.component';

describe('PneuComponent', () => {
  let component: PneuComponent;
  let fixture: ComponentFixture<PneuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PneuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PneuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
