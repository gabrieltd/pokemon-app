import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { PokemonActions } from 'src/app/store/actions/pokemon.actions';
import { Pokemon } from 'src/app/store/models/pokemon.model';
import { PokemonState } from 'src/app/store/reducers/pokemon.reducers';
import { selectPokemonList } from 'src/app/store/selectors/pokemon.selectors';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  pokemonList$ = this.store.select(selectPokemonList);
  datasource = new MatTableDataSource<Pokemon>();
  displayedColumns: string[] = ['id', 'image', 'name'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private store: Store<PokemonState>,
    private sidenavService: SidenavService
  ) {}

  ngOnInit(): void {
    this.pokemonList$.subscribe((data: Pokemon[]) => {
      this.datasource.data = data;
    });
    this.store.dispatch(PokemonActions.loadPokemonList());
  }

  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue!.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

  onImageError(event: any) {
    event.target.src = 'assets/placeholder-img.png';
  }

  selectPokemon(pokemon: Pokemon) {
    this.store.dispatch(PokemonActions.loadPokemonDetail({ pokemon }));
    this.sidenavService.open();
  }

  ngAfterViewInit(): void {
    this.datasource.paginator = this.paginator;
  }
}
