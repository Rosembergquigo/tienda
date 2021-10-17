import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPedidoComponent } from './mod-pedido.component';

describe('ModPedidoComponent', () => {
  let component: ModPedidoComponent;
  let fixture: ComponentFixture<ModPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
