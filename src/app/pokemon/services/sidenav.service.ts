import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private _sidenav!: MatSidenav;
  constructor() {}

  public setSidenav(sidenav: MatSidenav) {
    this._sidenav = sidenav;
  }

  public close(): void {
    this._sidenav.close();
  }

  public open(): void {
    this._sidenav.open();
  }

  public toggle(): void {
    this._sidenav.toggle();
  }

  public isOpen(): boolean {
    return this._sidenav.opened;
  }

  public changeMode(mode: 'over' | 'push' | 'side'): void {
    this._sidenav.mode = mode;
  }
}
