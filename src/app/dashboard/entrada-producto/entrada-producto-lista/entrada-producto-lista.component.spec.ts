import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaProductoListaComponent } from './entrada-producto-lista.component';

describe('EntradaProductoListaComponent', () => {
  let component: EntradaProductoListaComponent;
  let fixture: ComponentFixture<EntradaProductoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaProductoListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradaProductoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
