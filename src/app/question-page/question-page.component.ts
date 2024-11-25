import {Component, OnInit} from '@angular/core';
import {Weapon} from '../models/weapon.model';
import {EldenRingService} from '../services/eldenRing.service';
import {Observable} from 'rxjs';
import {EldenData} from '../models/eldenData.models';
import {AsyncPipe, NgForOf} from '@angular/common';
import {RandomShufflePipe } from '../randomShuffle.pipe';

@Component({
  selector: 'app-question-page',
  standalone: true,
  imports: [
    AsyncPipe,
    RandomShufflePipe,
    NgForOf
  ],
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.css'
})
export class QuestionPageComponent implements OnInit{
  // Tableau de toute les armes recuperer de l api
  weapons!:Weapon[];
  // Tableau de 5 armes qui seront utilise pour le quizz
  usedWeapons:Weapon[] = [];
  //Comptage du nombre de questions repondu
  currentPage = 0;
  currentQuestion:any[] = [];
  observData$!: Observable<EldenData>;

  score!: number;

  buttons!:any[];
  falseWeapon:string[] = [];

  questions = [
    {question : "Quel est le poids de cette arme?", type: 'weight'},
    {question : "Quel est la categorie de cette arme?", type: 'category'},
    {question : "Quel description représente le plus cette arme?", type: 'description'},
    {question : "Quel est le nom de cette arme?", type: 'name'},
  ];

  constructor(private eldenRingService: EldenRingService) {}

  ngOnInit() {
    this.eldenRingService.getWeapons()
      .subscribe(datas => {
        this.weapons = datas.data;
        this.fillUsedWeapArray();
        this.buttons = this.createButtons();
        this.getQuestion();
      });
    this.score = 0;
    this.observData$ = this.eldenRingService.getWeapons();
  }

  fillUsedWeapArray():void{
    for(let i = 0; i < 5; i++){
      let randNum = Math.floor(Math.random() * (40 - 0));
      this.usedWeapons.push(this.weapons[randNum]);
    }
  }

  createButtons(): any[]{
    let currentWeap = this.usedWeapons[this.currentPage].name;
    const buttons = [
      {weap: this.usedWeapons[this.currentPage], answer: true},
      {weap: this.weapons[this.randomWeapChooser(currentWeap)], answer: false},
      {weap: this.weapons[this.randomWeapChooser(currentWeap)], answer: false},
      {weap: this.weapons[this.randomWeapChooser(currentWeap)], answer: false},
    ];
    return buttons
  }

  changePage(answer: boolean):void{
    console.log(answer);
    this.currentPage+=1;
    this.falseWeapon = [];
    if(answer)
      this.score+=1;
    if(this.currentPage < 5){
      this.buttons = this.createButtons();
      this.getQuestion();
    }
    else
      console.log(this.score);
  }

  randomWeapChooser(usedWeapName: string): number{
    let randomWeap = Math.floor(Math.random() * (this.weapons.length - 1)) + 1;
    while(usedWeapName == this.weapons[randomWeap].name || this.falseWeapon.indexOf(this.weapons[randomWeap].name) != -1){
      randomWeap = Math.floor(Math.random() * (this.weapons.length - 1)) + 1;
    }
    this.falseWeapon.push(this.weapons[randomWeap].name);
    return randomWeap;
  }

  getQuestion(){
    let randomNum = Math.floor(Math.random() * (this.questions.length ));
    this.currentQuestion.push(this.questions[randomNum]);
  }
}
