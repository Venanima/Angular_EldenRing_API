import {UserModel} from './user.model';

export const All_Users: UserModel[] = [
  {
    login: 'root',
    motdePasse: null,
    role: 'ROLE_ADMIN',
    mail:'root@mail.com',
    bestscore: 0,
  },
  {
    login: 'user',
    motdePasse: 'mdp',
    role: 'ROLE_USER',
    mail:'user@mail.com',
    bestscore: 3,
  }
];
