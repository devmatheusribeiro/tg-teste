import { TestBed } from '@angular/core/testing';

import { Teste4DadosService } from './teste4-dados.service';

describe('Teste4DadosService', () => {
  let service: Teste4DadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Teste4DadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
