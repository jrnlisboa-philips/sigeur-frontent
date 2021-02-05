import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoCadComponent } from './cargo-cad.component';

describe('CargoCadComponent', () => {
  let component: CargoCadComponent;
  let fixture: ComponentFixture<CargoCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoCadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
