import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from '../reducers/pokemon.reducers';
import { PokemonByLetter } from 'src/app/pokemon/interfaces/PokemonByLetter';
import { Observable } from 'rxjs';

export const selectPokemonState =
  createFeatureSelector<PokemonState>('pokemon');

export const selectPokemonList = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.pokemonList
);

export const selectPokemonLoading = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.loading
);

export const selectPokemonError = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.error
);

export const selectActivePokemon = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.active
);

export const selectFavoritePokemon = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.favorite
);

export const selectPokemonDetail = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.pokemonDetail
);

export const selectPokemonByLetter = createSelector(
  selectPokemonState,
  (state: PokemonState) =>
    // state.pokemonList.map((p) => p.name.charAt(0).toUpperCase())
    {
      const asJson: PokemonByLetter = state.pokemonList.reduce(
        (result: any, pokemon) => {
          const firstLetter = pokemon.name.charAt(0).toUpperCase();
          result[firstLetter] = (result[firstLetter] || 0) + 1;
          return result;
        },
        {}
      );

      const asArray = Object.entries(asJson)
        .map(([letter, quantity]) => ({
          letter,
          quantity,
        }))
        .sort((a, b) => a.letter.localeCompare(b.letter));

      return asArray;
    }
);
