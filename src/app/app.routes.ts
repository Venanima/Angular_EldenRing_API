import { Routes } from '@angular/router';
import {QuestionPageComponent} from './question-page/question-page.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {ListeUserPageComponent} from './liste-user-page/liste-user-page.component';

export const routes: Routes = [
  {
  path: 'quizz',
  component: QuestionPageComponent,
  title: 'Questions'
},
  {
    path: '',
    component: WelcomePageComponent,
    title: 'Home'
  },
  {
    path: 'users',
    component: ListeUserPageComponent,
    title: 'Liste utilisateur'
  },
];
