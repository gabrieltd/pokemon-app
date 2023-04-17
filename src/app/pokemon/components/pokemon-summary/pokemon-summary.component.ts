import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonState } from 'src/app/store/reducers/pokemon.reducers';
import {
  selectActivePokemon,
  selectPokemonByLetter,
  selectPokemonList,
} from 'src/app/store/selectors/pokemon.selectors';
import { PokemonByLetter } from '../../interfaces/PokemonByLetter';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, tap } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-summary',
  templateUrl: './pokemon-summary.component.html',
  styleUrls: ['./pokemon-summary.component.scss'],
})
export class PokemonSummaryComponent implements OnInit, AfterViewInit {
  pokemonByLetter$ = this.store.select(selectPokemonByLetter);
  // pokemonByLetter$!: Observable<any>;
  displayedColumns: string[] = ['letter', 'quantity'];
  datasource = new MatTableDataSource<PokemonByLetter>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private store: Store<PokemonState>) {}

  ngAfterViewInit(): void {
    this.datasource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.store
      .select(selectPokemonByLetter)
      .subscribe((data) => (this.datasource.data = data));
  }
}
