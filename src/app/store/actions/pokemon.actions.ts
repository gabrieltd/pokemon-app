import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Pokemon } from '../models/pokemon.model';
import { PokemonDetail } from '../models/pokemon-detail.model';

export const PokemonActions = createActionGroup({
  source: 'Pokemon',
  events: {
    'Load Pokemon List': emptyProps(),
    'Load Pokemon Detail': props<{ pokemon: Pokemon }>(),
    'Select Favorite': props<{ pokemon: PokemonDetail }>(),
  },
});

export const PokemonApiActions = createActionGroup({
  source: 'PokemonAPI',
  events: {
    'Pokemon Loaded Success': props<{ pokemonList: Pokemon[] }>(),
    'Pokemon Loaded Failure': props<{ error: any }>(),
    'Pokemon Detail Loaded Success': props<{ pokemon: PokemonDetail }>(),
    'Pokemon Detail Loaded Failure': props<{ error: any }>(),
  },
});
