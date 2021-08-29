import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCajaComponent } from './mod-caja.component';

describe('ModCajaComponent', () => {
  let component: ModCajaComponent;
  let fixture: ComponentFixture<ModCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModCajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
