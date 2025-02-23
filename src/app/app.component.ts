import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

export enum MENU {
  HOME = 'Home',
  ABOUT = 'About',
  SKILLS = 'Skills'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  menu = [
    {
      'name': MENU.HOME,
      'icon': 'home',
      'url': ''
    },
    {
      'name': MENU.ABOUT,
      'icon': 'person',
      'url': 'about-me'
    },
    {
      'name': MENU.SKILLS,
      'icon': 'engineering',
      'url': 'skills'
    }
  ]
}
