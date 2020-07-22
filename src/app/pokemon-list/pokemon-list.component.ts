import { Component, OnInit } from '@angular/core';
import { PokemonListService } from '../pokemon-list/pokemon-list.service';
import { modelPokemonList } from './pokemon-list.model';

@Component({
    selector: 'pokemon-list-component',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

    apiPokemonList: modelPokemonList[];
    arrayPokemonList: any = [];

    constructor( private PokemonListService: PokemonListService ) { }

    ngOnInit(): void {
        // this.pokemonList = ['Charmander', 'Bulbasaur'];
        // this.pokemonList = this.pokemonListService.getPokemons();
        this.getPokemons();
    }

    getPokemons(){
        this.PokemonListService.getPokemons().subscribe(
            // dados => this.apiPokemonList = dados.results
            // dados => this.getPokemonsImages( dados.results )
        );
    }

    getPokemonsImages( data ){
        // for (let i = 0; i < data.length; i++) {
            // this.arrayPokemonList[i].push({ pokeName: data[i].name, pokeImage: '' });

            // this.PokemonListService.getPokemonImage( data[i].url ).subscribe(
            //     // resultPokemon => this.insertImageArray( i, resultPokemon.sprites.front_default )
            //     function(resultPokemon){
            //         // this.arrayPokemonList.push({ pokeImage: resultPokemon.sprites.front_default });
            //         this.arrayPokemonList[i].pokeImage = 'oi';
            //     }
            // );
        // }
        console.log( this.arrayPokemonList );
    }

    // insertImageArray( index, data ) {
        // this.arrayPokemonList[index].push( this.arrayPokemonList[index].pokeImage = data );
        // this.arrayPokemonList[index].image = data;
        // this.arrayPokemonList[index].push({ pokeImage: data });
        // console.log( this.arrayPokemonList[index] );
        // console.log( data );
    // }
}
