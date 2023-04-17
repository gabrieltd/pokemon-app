import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PokemonActions } from 'src/app/store/actions/pokemon.actions';
import { PokemonDetail } from 'src/app/store/models/pokemon-detail.model';
import { PokemonState } from 'src/app/store/reducers/pokemon.reducers';
import {
  selectPokemonDetail,
  selectPokemonLoading,
} from 'src/app/store/selectors/pokemon.selectors';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemonDetail!: Observable<PokemonDetail | null>;
  isLoading!: Observable<boolean>;

  constructor(private store: Store<PokemonState>) {}

  ngOnInit(): void {
    this.pokemonDetail = this.store.select(selectPokemonDetail);
    this.isLoading = this.store.select(selectPokemonLoading);
  }

  selectFavorite(pokemon: PokemonDetail): void {
    this.store.dispatch(PokemonActions.selectFavorite({ pokemon }));
  }

  onImageError(event: any) {
    event.target.src = 'assets/placeholder-img.png';
  }
}
