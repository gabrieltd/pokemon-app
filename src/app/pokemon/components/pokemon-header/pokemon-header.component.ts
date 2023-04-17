import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Store } from '@ngrx/store';
import { PokemonState } from 'src/app/store/reducers/pokemon.reducers';
import { Observable } from 'rxjs';
import { PokemonDetail } from 'src/app/store/models/pokemon-detail.model';
import { selectFavoritePokemon } from 'src/app/store/selectors/pokemon.selectors';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.scss'],
})
export class PokemonHeaderComponent implements OnInit {
  favoritePokemon$!: Observable<PokemonDetail | null>;
  constructor(
    private sidenavService: SidenavService,
    private store: Store<PokemonState>
  ) {}

  ngOnInit(): void {
    this.favoritePokemon$ = this.store.select(selectFavoritePokemon);
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }
  sidenavIsOpen(): boolean {
    return this.sidenavService.isOpen();
  }
}
