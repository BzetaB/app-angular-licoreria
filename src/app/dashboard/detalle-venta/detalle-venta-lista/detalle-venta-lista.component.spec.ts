import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVentaListaComponent } from './detalle-venta-lista.component';

describe('DetalleVentaListaComponent', () => {
  let component: DetalleVentaListaComponent;
  let fixture: ComponentFixture<DetalleVentaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleVentaListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleVentaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
