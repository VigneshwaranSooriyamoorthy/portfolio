import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {SkillsComponent} from './skills/skills.component';
import {ContactComponent} from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about-me', component: AboutMeComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'contact', component: ContactComponent},
  ]
;
