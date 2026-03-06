import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})

export class Menu {
  // FILS émet vers le PÈRE quand un filtre est sélectionné
  @Output() filterChanged = new EventEmitter<string>();
  
  activeFilter: string = 'All';

  onFilterClick(filter: string): void {
    this.activeFilter = filter;
    this.filterChanged.emit(filter);
  }
}