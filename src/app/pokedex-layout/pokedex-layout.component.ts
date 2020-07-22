import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex-layout',
  templateUrl: './pokedex-layout.component.html',
  styleUrls: ['./pokedex-layout.component.scss']
})
export class PokedexLayoutComponent implements OnInit {

  pokemons: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
