import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste4Component } from './teste-4.component';

describe('Teste4Component', () => {
  let component: Teste4Component;
  let fixture: ComponentFixture<Teste4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
