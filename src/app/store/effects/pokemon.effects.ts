import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { PokeApiService } from 'src/app/pokemon/services/poke-api.service';
import { PokemonActions, PokemonApiActions } from '../actions/pokemon.actions';

@Injectable()
export class PokemonEffects {
  loadPokemonList$ = createEffect(() =>
    this.actions$.pipe(ofType(PokemonActions.loadPokemonList)).pipe(
      exhaustMap(() =>
        this.pokeApiService.getAllPokemon().pipe(
          map((pokemonList) =>
            PokemonApiActions.pokemonLoadedSuccess({
              pokemonList,
            })
          ),
          catchError((error) =>
            of(PokemonApiActions.pokemonLoadedFailure(error))
          )
        )
      )
    )
  );

  loadPokemonDetail$ = createEffect(() =>
    this.actions$.pipe(ofType(PokemonActions.loadPokemonDetail)).pipe(
      exhaustMap((action) =>
        this.pokeApiService.getSinglePokemon(action.pokemon.id).pipe(
          map((pokemon) => {
            return PokemonApiActions.pokemonDetailLoadedSuccess({ pokemon });
          }),
          catchError((error) =>
            of(PokemonApiActions.pokemonLoadedFailure(error))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokeApiService: PokeApiService
  ) {}
}
