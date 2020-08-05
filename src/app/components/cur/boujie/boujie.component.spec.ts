import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoujieComponent } from './boujie.component';

describe('BoujieComponent', () => {
  let component: BoujieComponent;
  let fixture: ComponentFixture<BoujieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoujieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoujieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
