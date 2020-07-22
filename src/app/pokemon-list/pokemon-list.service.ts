import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { modelPokemonList } from './pokemon-list.model';
import { tap } from 'rxjs/operators';
// import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class PokemonListService {

    private readonly API = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(private http: HttpClient) {}

    getPokemons() {
        // this.http.get( API )
        //     .pipe( map( data => data ) )
        //     .subscribe( data => this.pokemonsToField( data ) )
        // ;
        return this.http.get< modelPokemonList[] >( this.API ); //.pipe( tap( console.log ) );
    }

    getPokemonImage( pokeUrl ) {
        return this.http.get( pokeUrl )
        // .pipe( tap( console.log ) )
        ;

        // this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokeId)
        //     .pipe( map( data => data ) )
        //     .subscribe( data => this.pokemonsToField( data ) )
        // ;
    }

    // pokemonsToField( data ) {
    //     // console.log( data );
    //     // return data;

    //     return '';
    // }

}
