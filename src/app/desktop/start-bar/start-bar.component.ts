import { Component } from '@angular/core';
import {MenuStartComponent} from './menu-start/menu-start.component';

@Component({
  selector: 'app-start-bar',
  standalone: true,
  imports: [MenuStartComponent],
  templateUrl: './start-bar.component.html',
  styleUrl: './start-bar.component.scss'
})
export class StartBarComponent {

}
