import {Component, OnInit, Renderer2} from '@angular/core';
import {MENU} from '../app.component';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const page = document.getElementById(MENU.HOME);
    this.renderer.setStyle(page, 'background-color', '#1967D2')
    this.renderer.setStyle(page, 'border-radius', '2cqw')
  }
}
