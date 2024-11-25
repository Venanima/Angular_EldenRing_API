
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of, tap} from 'rxjs';
import {Weapon} from '../models/weapon.model';
import {Injectable} from '@angular/core';
import {EldenData} from '../models/eldenData.models';
import {UserModel} from '../models/user.model';
import {All_Users} from '../models/user-data';

@Injectable({
  providedIn:'root'
})

export class EldenRingService{
  constructor(private http: HttpClient) {}

  getWeapons():Observable<EldenData>{
    return this.http.get<EldenData>('https://eldenring.fanapis.com/api/weapons?limit=40');
  }

  getWeaponId(id: string):Observable<EldenData>{
    return this.http.get<EldenData>(`https://eldenring.fanapis.com/api/weapons/${id}`);
  }

  getUsers():Observable<UserModel[]>{
    return of(All_Users);
  }

}
