import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonListNewService {

    apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    // apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=20';
    // apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private httpClient: HttpClient
    ) { }

    public getPokemonsWithOffset( offset: number ): Observable<ResponsePageable> {
        return this.httpClient.get<ResponsePageable>(this.apiUrl + '?offset=' + offset);
    }
}
