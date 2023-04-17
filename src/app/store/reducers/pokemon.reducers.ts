import { createReducer, on } from '@ngrx/store';
import { PokemonActions, PokemonApiActions } from '../actions/pokemon.actions';
import { Pokemon } from '../models/pokemon.model';
import { state } from '@angular/animations';
import { PokemonDetail } from '../models/pokemon-detail.model';

export interface PokemonState {
  pokemonList: Pokemon[];
  pokemonDetail: PokemonDetail | null;
  active: Pokemon | null;
  favorite: PokemonDetail | null;
  loading: boolean;
  error: string;
}

export const initialState: PokemonState = {
  pokemonList: [],
  pokemonDetail: null,
  active: null,
  favorite: null,
  loading: false,
  error: '',
};

export const PokemonReducer = createReducer(
  initialState,
  //Pokemon List
  on(PokemonActions.loadPokemonList, (state) => ({
    ...state,
    loading: true,
  })),
  on(PokemonApiActions.pokemonLoadedSuccess, (state, { pokemonList }) => ({
    ...state,
    pokemonList,
    loading: false,
  })),
  on(PokemonApiActions.pokemonLoadedFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),

  //Favorite
  on(PokemonActions.selectFavorite, (state, { pokemon }) => ({
    ...state,
    favorite: pokemon,
  })),

  //Pokemon Detail
  on(PokemonActions.loadPokemonDetail, (state, { pokemon }) => ({
    ...state,
    loading: true,
    active: pokemon,
  })),
  on(PokemonApiActions.pokemonDetailLoadedSuccess, (state, { pokemon }) => ({
    ...state,
    pokemonDetail: pokemon,
    loading: false,
  })),
  on(PokemonApiActions.pokemonDetailLoadedFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);
