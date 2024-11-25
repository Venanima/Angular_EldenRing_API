import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {map, Observable} from 'rxjs';
import {Weapon} from './models/weapon.model';
import {EldenRingService} from './services/eldenRing.service';
import {AsyncPipe, CommonModule} from '@angular/common';
import {EldenData} from './models/eldenData.models';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule, WelcomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  datas: EldenData= new EldenData();
  weapons: Weapon[] = [];
  weapon$!: Observable<Weapon>;
  weapObser$!: Observable<EldenData>;
  title = 'Angular-EldenRingAPI';
  pickWeapon: number = 0;

  constructor(private eldenRingService: EldenRingService) {}

  ngOnInit():void{
    // Appel pour avoir un tableau d'armes
   /* this.eldenRingService.getWeapons()
      .subscribe(datas => this.weapons = datas.data);

    this.weapObser$ = this.eldenRingService.getWeapons();

    // Appel pour avoir juste un {} d'arme
    this.eldenRingService.getWeaponId('17f695c42f0l0i1ohb4cao0qxackpu')
      .subscribe(datas => this.weapon$ = datas.data)

    this.pickWeapon = Math.floor(Math.random() * (9 - 0));*/
  }


}
