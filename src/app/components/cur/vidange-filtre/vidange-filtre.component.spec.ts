import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidangeFiltreComponent } from './vidange-filtre.component';

describe('VidangeFiltreComponent', () => {
  let component: VidangeFiltreComponent;
  let fixture: ComponentFixture<VidangeFiltreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidangeFiltreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidangeFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
