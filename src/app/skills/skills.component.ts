import {Component, Renderer2} from '@angular/core';
import {NgStyle} from '@angular/common';
import {MENU} from '../app.component';

@Component({
  selector: 'app-skills',
  imports: [
    NgStyle
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor(private renderer: Renderer2) {}

  skills = [
    {
      'column': 1,
      'details': [
        {
          'area': 'Automation Tools',
          'tools': [
            {
              'name': 'Cypress',
              'rating': 0.8
            },
            {
              'name': 'Selenium Webdriver',
              'rating': 0.8
            },
            {
              'name': 'PlayWright',
              'rating': 0.6
            },
            {
              'name': 'UiPath',
              'rating': 0.6
            },
            {
              'name': 'UFT',
              'rating': 0.6
            },
            {
              'name': 'VBA - Macro',
              'rating': 0.6
            }
          ]
        },
        {
          'area': 'Testing Framework',
          'tools': [
            {
              'name': 'Cucumber',
              'rating': 0.8
            },
            {
              'name': 'NUnit',
              'rating': 0.6
            },
            {
              'name': 'PyTest',
              'rating': 0.6
            },
            {
              'name': 'TestNG',
              'rating': 0.6
            }
          ]
        },
        {
          'area': 'API Automation Testing',
          'tools': [
            {
              'name': 'Karate',
              'rating': 0.6
            },
            {
              'name': 'RestSharp',
              'rating': 0.4
            }
          ]
        }
      ]
    },
    {
      'column': 2,
      'details': [
        {
          'area': 'Language',
          'tools': [
            {
              'name': 'JavaScript',
              'rating': 0.5
            },
            {
              'name': 'TypeScript',
              'rating': 0.5
            },
            {
              'name': 'Java',
              'rating': 0.7
            },
            {
              'name': 'Python',
              'rating': 0.8
            },
            {
              'name': '.Net C#',
              'rating': 0.6
            }
          ]
        },
        {
          'area': 'Version Control',
          'tools': [
            {
              'name': 'Git',
              'rating': 0.8
            }
          ]
        },
        {
          'area': 'IDE',
          'tools': [
            {
              'name': 'IntelliJ',
              'rating': 0.8
            },
            {
              'name': 'VS Code',
              'rating': 0.6
            },
            {
              'name': 'Visual Studio',
              'rating': 0.5
            }
          ]
        }
      ]
    },
    {
      'column': 3,
      'details': [
        {
          'area': 'Database',
          'tools': [
            {
              'name': 'Microsoft SQL Server',
              'rating': 0.6
            },
            {
              'name': 'MongoDB',
              'rating': 0.4
            }
          ]
        },
        {
          'area': 'CI-CD',
          'tools': [
            {
              'name': 'Atlassian Bamboo',
              'rating': 0.8
            },
            {
              'name': 'Azure DevOps',
              'rating': 0.8
            }
          ]
        },
        {
          'area': 'Project Management',
          'tools': [
            {
              'name': 'Atlassian Jira',
              'rating': 0.8
            },
            {
              'name': 'Azure DevOps',
              'rating': 0.8
            },
            {
              'name': 'ALM',
              'rating': 0.7
            }
          ]
        }
      ]
    }
  ];

  ngOnInit() {
    const page = document.getElementById(MENU.SKILLS);
    this.renderer.setStyle(page, 'background-color', '#1967D2')
    this.renderer.setStyle(page, 'border-radius', '2cqw')
  }
}
