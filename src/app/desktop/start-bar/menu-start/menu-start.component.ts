import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MenuOptionBoxComponent} from './menu-option-box/menu-option-box.component';

@Component({
  selector: 'app-menu-start',
  standalone: true,
  imports: [MenuOptionBoxComponent, CommonModule],
  templateUrl: './menu-start.component.html',
  styleUrl: './menu-start.component.scss'
})
export class MenuStartComponent {
  test :boolean = true;
  showApp :boolean = false;

  showShortBox(){
    this.showApp = !this.showApp;
  }
}
