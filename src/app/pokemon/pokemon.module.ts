import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pages/pokemon-page.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonHeaderComponent } from './components/pokemon-header/pokemon-header.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { SharedModule } from '../shared/shared.module';
import {
  PokemonFavoriteComponent,
  PokemonFavoriteDialog,
} from './components/pokemon-favorite/pokemon-favorite.component';
import { PokemonSummaryComponent } from './components/pokemon-summary/pokemon-summary.component';
@NgModule({
  declarations: [
    PokemonPageComponent,
    PokemonListComponent,
    PokemonSearchComponent,
    PokemonHeaderComponent,
    PokemonDetailComponent,
    PokemonFavoriteComponent,
    PokemonFavoriteDialog,
    PokemonSummaryComponent,
  ],
  exports: [PokemonPageComponent],
  imports: [CommonModule, SharedModule],
})
export class PokemonModule {}
