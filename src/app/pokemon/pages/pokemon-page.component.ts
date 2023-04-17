import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss'],
})
export class PokemonPageComponent {
  @ViewChild('sidenav', { static: true }) public sidenav!: MatSidenav;

  constructor(
    private sidenavService: SidenavService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        !result.matches
          ? this.sidenavService.changeMode('side')
          : this.sidenavService.changeMode('over');
      });
  }
}
