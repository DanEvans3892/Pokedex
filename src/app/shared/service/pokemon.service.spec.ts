import { TestBed } from '@angular/core/testing';

import { PokemonListNewService } from './pokemon.service';

describe('PokemonListNewService', () => {
  let service: PokemonListNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonListNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
