import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PokemonDetail } from 'src/app/store/models/pokemon-detail.model';
import { PokemonState } from 'src/app/store/reducers/pokemon.reducers';
import { selectFavoritePokemon } from 'src/app/store/selectors/pokemon.selectors';

@Component({
  selector: 'app-pokemon-favorite',
  templateUrl: './pokemon-favorite.component.html',
  styleUrls: ['./pokemon-favorite.component.scss'],
})
export class PokemonFavoriteComponent implements OnInit {
  favoritePokemon$!: Observable<PokemonDetail | null>;
  constructor(public dialog: MatDialog, private store: Store<PokemonState>) {}

  ngOnInit(): void {
    this.favoritePokemon$ = this.store.select(selectFavoritePokemon);
  }

  openDialog(): void {
    this.dialog.open(PokemonFavoriteDialog, {
      width: '250px',
    });
  }

  onImageError(event: any) {
    event.target.src = 'assets/placeholder-img.png';
  }
}

@Component({
  selector: 'app-pokemon-favorite-dialog',
  templateUrl: 'pokemon-favorite-dialog.html',
  styleUrls: ['./pokemon-favorite-dialog.scss'],
})
export class PokemonFavoriteDialog implements OnInit {
  favoritePokemon$!: Observable<PokemonDetail | null>;
  constructor(
    public dialogRef: MatDialogRef<PokemonFavoriteDialog>,
    private store: Store<PokemonState>
  ) {}

  ngOnInit(): void {
    this.favoritePokemon$ = this.store.select(selectFavoritePokemon);
  }

  onImageError(event: any) {
    event.target.src = 'assets/placeholder-img.png';
  }
}
