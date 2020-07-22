import { Component, OnInit } from '@angular/core';
import { PokemonListService } from '../pokemon-list/pokemon-list.service';
import { ModelPokemonList } from './pokemon-list.model';

@Component({
    selector: 'pokemon-list-component',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

    pokemonList: ModelPokemonList[] = [];
    pokemonListInfo: any;

    constructor( private pokemonListService: PokemonListService ) { }

    ngOnInit(): void {
        this.getPokemons();
    }

    getPokemons(){
        // this.pokemonList = [ { name: 'Charmander', url: '', image: ''}, { name: 'Bulbasaur', url: '', image: ''} ];

        this.pokemonListService.getPokemons().subscribe(
            // console.log
            // dados => this.pokemonList = dados.results
            dados => this.getPokemonsInfo( dados )
        );
    }

    getPokemonsInfo( data ) {
        for (const [i, arrayPokemons] of data.results.entries()) {
            // Carregando o nome dos Pokemons
            this.pokemonList.push({ name: arrayPokemons.name, image: '' });

            // Inserindo a pokebola nas imagens
            this.pokemonList[i].image = 'https://img.elo7.com.br/product/zoom/28E57AD/pokebola-scanncut.jpg';

            // Carregando as imagens dos Pokemons
            this.pokemonListService.getPokemonImage( arrayPokemons.url ).subscribe(
                pokeInfo => this.pokemonList[i].image = pokeInfo.sprites.front_default
            );
        }
    }
}
