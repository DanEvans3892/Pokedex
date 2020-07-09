import { Component, OnInit } from '@angular/core';

import { PokedexService } from './pokedex.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: string[] = [];
  pokedexService: PokedexService;

  constructor( _pokedexService: PokedexService ) {
    this.pokedexService = _pokedexService;
  }

  ngOnInit(): void {
    this.pokemons = this.pokedexService.getPokemons();
  }

}
