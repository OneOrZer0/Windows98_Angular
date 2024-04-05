import { Component } from '@angular/core';
import {MenuStartComponent} from './menu-start/menu-start.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-bar',
  standalone: true,
  imports: [MenuStartComponent, CommonModule],
  templateUrl: './start-bar.component.html',
  styleUrl: './start-bar.component.scss'
})
export class StartBarComponent {

  isVisible: boolean = false;

  switchVis(){
    this.isVisible = !this.isVisible;
  }
}
