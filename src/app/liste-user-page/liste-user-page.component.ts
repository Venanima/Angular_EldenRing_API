import {Component, OnInit} from '@angular/core';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';
import {EldenRingService} from '../services/eldenRing.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-liste-user-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './liste-user-page.component.html',
  styleUrl: './liste-user-page.component.css'
})
export class ListeUserPageComponent implements OnInit{
  users!: UserModel[];
  userObserve!: Observable<UserModel[]>;

  constructor(private eldenRingService: EldenRingService) {}

  ngOnInit(): void {
    this.eldenRingService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
    this.userObserve = this.eldenRingService.getUsers();
  }
}

// Pour l'auth de l'utilisateur, regarder l'api JWt pour avoir des tokens
