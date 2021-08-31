import { Component } from '@angular/core';
import { cardClass } from '../app.component';
import { BaseService } from '../shared/Base.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  cardsClass: cardClass[] = [
    {
      name: 'Action (set A)', imgSrc: './assets/img/cry.jpg', link: '/actionA', word: 'actionA',
    },
    {
      name: 'Action (set B)', imgSrc: './assets/img/open.jpg', link: '/actionB', word: 'actionB',
    },
    {
      name: 'Animal (set A)', imgSrc: './assets/img/cat.jpg', link: '/animalA', word: 'animalA',
    },
    {
      name: 'Animal (set B)', imgSrc: './assets/img/bird.jpg', link: '/animalB', word: 'animalB',
    },
    {
      name: 'House', imgSrc: './assets/img/table.jpg', link: '/house', word: 'house',
    },
    {
      name: 'OutDoors', imgSrc: './assets/img/sidewalk.jpg', link: '/outDoors', word: 'outdoors',
    },
    {
      name: 'clothes', imgSrc: './assets/img/skirt.jpg', link: '/clothes', word: 'clothes',
    },
    {
      name: 'Emotion', imgSrc: './assets/img/sad.jpg', link: '/emotion', word: 'emotion',
    }];
  constructor(private BaseService:BaseService) {
    BaseService.setLocal();
    BaseService.getIdForRenderGame();
  }
}
