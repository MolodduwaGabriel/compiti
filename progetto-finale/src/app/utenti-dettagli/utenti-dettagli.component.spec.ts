import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentiDettagliComponent } from './utenti-dettagli.component';

describe('UtentiDettagliComponent', () => {
  let component: UtentiDettagliComponent;
  let fixture: ComponentFixture<UtentiDettagliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtentiDettagliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtentiDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
