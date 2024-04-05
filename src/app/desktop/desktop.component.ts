import { Component } from '@angular/core';
import {StartBarComponent} from './start-bar/start-bar.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [StartBarComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {

}
