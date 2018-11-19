import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberClienteCriadoComponent } from './receber-cliente-criado.component';

describe('ReceberClienteCriadoComponent', () => {
  let component: ReceberClienteCriadoComponent;
  let fixture: ComponentFixture<ReceberClienteCriadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceberClienteCriadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceberClienteCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
