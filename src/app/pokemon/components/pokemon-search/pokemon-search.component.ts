import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { PokemonState } from 'src/app/store/reducers/pokemon.reducers';
import { selectPokemonList } from 'src/app/store/selectors/pokemon.selectors';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent implements OnInit {
  @Output() filterChange = new EventEmitter<string>();

  searchControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  options: string[] = [];

  constructor(private store: Store<PokemonState>) {}

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      map((value) => this._filter(value || ''))
    );

    this.store.select(selectPokemonList).subscribe((data) => {
      this.options = data.map((pokemon) => pokemon.name);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => {
      return option.toLowerCase().includes(filterValue);
    });
  }

  applyFilter() {
    const filterValue = this.searchControl.value || '';
    this.filterChange.emit(filterValue);
  }

  foo(event: MatAutocompleteSelectedEvent) {
    this.searchControl.setValue(event.option.value);
    this.applyFilter();
  }
}
