import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCadComponent } from './perfil-cad.component';

describe('PerfilCadComponent', () => {
  let component: PerfilCadComponent;
  let fixture: ComponentFixture<PerfilCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
