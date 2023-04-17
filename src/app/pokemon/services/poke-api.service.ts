import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Pokemon } from 'src/app/store/models/pokemon.model';
import { AllPokemonResponse } from '../interfaces/AllPokemonResponse';
import { SinglePokemonResponse } from '../interfaces/SinglePokemonResponse';
import { PokemonDetail } from 'src/app/store/models/pokemon-detail.model';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private _baseUrl = 'http://pokeapi.co/api/v2';
  private _limit = 9999;

  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<Pokemon[]> {
    const url = `${this._baseUrl}/pokemon?limit=${this._limit}`;
    return this.http
      .get<AllPokemonResponse>(url)
      .pipe(map((data) => this._getAllPokemonInfo(data)));
  }

  getSinglePokemon(id: string): Observable<any> {
    const url = `${this._baseUrl}/pokemon/${id}`;
    return this.http
      .get<SinglePokemonResponse>(url)

      .pipe(map((data) => this._getSinglePokemonInfo(data)));
  }

  private _getSinglePokemonInfo(data: SinglePokemonResponse): PokemonDetail {
    return {
      id: data.id?.toString(),
      name: data.name,
      height: data.height,
      weight: data.weight,
      type: data.types?.map((type) => type.type.name),
      imgSprite: data.sprites?.front_default,
      imgArtwork: data.sprites?.other?.['official-artwork'].front_default,
    };
  }
  private _getAllPokemonInfo(data: AllPokemonResponse): Pokemon[] {
    const results = data.results.map((pokemon) => {
      const id = pokemon.url.split('/')[6];
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return {
        id,
        img,
        name: pokemon.name,
        url: pokemon.url,
      };
    });

    return results;
  }
}
