import { Component } from '@angular/core';
import { CardsService } from '../shared/cards.service';
import { GameService } from '../shared/game.service';
import { BaseService } from '../shared/Base.service';
export interface cardsAction {
  word:string
  translation:string
  image:string
  audioSrc:string
  trainClick: number
  rightAnswer: number
  errorAnswer: 0
}
@Component({
  selector: 'app-cards-inner-game',
  templateUrl: './cards-inner-game.component.html',
  styleUrls: ['./cards-inner-game.component.scss'],
})
export class CardsInnerGameComponent {
  constructor(private CardsService: CardsService, private GameService: GameService,
              public BaseService:BaseService) {
    CardsService.rotateCards();
    GameService.audioCards();
    GameService.startGame();
    GameService.clickCompare();
    BaseService.arrInnerForGame;
  }
}
