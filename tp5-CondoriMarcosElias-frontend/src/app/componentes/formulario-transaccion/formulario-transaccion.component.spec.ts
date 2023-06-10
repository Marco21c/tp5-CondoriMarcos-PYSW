import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTransaccionComponent } from './formulario-transaccion.component';

describe('FormularioTransaccionComponent', () => {
  let component: FormularioTransaccionComponent;
  let fixture: ComponentFixture<FormularioTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioTransaccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
