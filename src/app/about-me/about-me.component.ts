import {Component, OnInit, Renderer2} from '@angular/core';
import {MENU} from '../app.component';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  designation: string = 'Senior Test/Integration Engineer';
  location: string = 'Eindhoven, The Netherlands';
  currentDate: Date = new Date();
  dateOfJoining: Date = new Date('2015-06-26');
  monthDiff: number = this.currentDate.getMonth() - this.dateOfJoining.getMonth();
  yearDiff: number = this.currentDate.getFullYear() - this.dateOfJoining.getFullYear();
  experience: string = '';
  aboutMe: string = '';
  academy: string = '<b>Bachelor of Engineering in Mechatronics</b> with CGPA 9.2 by April 2015 from Sri Krishna College of Engineering and Technology (SKCET), Coimbatore, Tamilnadu, India'
  details = [
    {
      'area': 'Awards',
      'content': [
        'Pursuing Innovation | Mar 21',
        'Exception Client Service | Sep 20',
        'SPOT | Feb 20',
        'SPOT | Mar 19',
        'Pillar of the Month | Jul 17',
        'Olymation Gold Medal | Mar 17'
      ]
    },
    {
      'area': 'Languages',
      'content': [
        'Tamil',
        'English'
      ]
    },
    {
      'area': 'Nationality',
      'content': ['Indian']
    },
    {
      'area': 'Hobbies',
      'content': [
        'Carom',
        'Chess',
        'Sudoku'
      ]
    }
  ];

  ngOnInit() {
    const page = document.getElementById(MENU.ABOUT);
    this.renderer.setStyle(page, 'background-color', '#1967D2')
    this.renderer.setStyle(page, 'border-radius', '2cqw')

    if (this.monthDiff === 0) {
      this.experience = `${this.yearDiff} years`;
    } else if (this.monthDiff < 0) {
      this.experience = `${this.yearDiff - 1} years and ${12 + this.monthDiff} months`;
    } else {
      this.experience = `${this.yearDiff} years and ${this.monthDiff} months`;
    }
    this.aboutMe = `Passionate Techno-Functional test engineer with ${this.experience} of professional experience skilled to analyze, test and develop scripts, able to learn, adapt and improve skills with focus and commitment for the excellence of Individual and the Organization`
  }
}
