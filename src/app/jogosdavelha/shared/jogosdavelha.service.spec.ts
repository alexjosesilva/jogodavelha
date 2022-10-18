import { TestBed } from '@angular/core/testing';

import { JogosdavelhaService } from './jogosdavelha.service';

describe('JogosdavelhaService', () => {
  let service: JogosdavelhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogosdavelhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
