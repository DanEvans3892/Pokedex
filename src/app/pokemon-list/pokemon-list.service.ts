import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { tap } from 'rxjs/operators';
// import { map } from 'rxjs/operators';

import { ModelPokemonList } from './pokemon-list.model';

@Injectable({
    providedIn: 'root'
})

export class PokemonListService {
    private readonly API = 'https://pokeapi.co/api/v2/pokemon/';
    constructor(private http: HttpClient) {}

    getPokemons() {
        return this.http.get< ModelPokemonList[] >( this.API ); //.pipe( tap( console.log ) );
    }

    getPokemonImage( pokeUrl ) {
        return this.http.get( pokeUrl ); // .pipe( tap( console.log ) );
    }
}
