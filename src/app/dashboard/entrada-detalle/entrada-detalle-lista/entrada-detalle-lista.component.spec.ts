import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDetalleListaComponent } from './entrada-detalle-lista.component';

describe('EntradaDetalleListaComponent', () => {
  let component: EntradaDetalleListaComponent;
  let fixture: ComponentFixture<EntradaDetalleListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaDetalleListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradaDetalleListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
