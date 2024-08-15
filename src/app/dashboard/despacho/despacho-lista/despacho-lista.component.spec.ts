import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachoListaComponent } from './despacho-lista.component';

describe('DespachoListaComponent', () => {
  let component: DespachoListaComponent;
  let fixture: ComponentFixture<DespachoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespachoListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DespachoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
