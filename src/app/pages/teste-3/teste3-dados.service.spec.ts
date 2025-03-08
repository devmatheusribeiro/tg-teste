import { TestBed } from '@angular/core/testing';

import { TesteDadosService } from '../../shared/services/teste-dados.service';

describe('Teste3DadosService', () => {
  let service: TesteDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesteDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
