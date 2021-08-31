import { Component } from '@angular/core';
import  {cardsInnerClass} from "../app.component";
import {Router} from "@angular/router";
export interface cardsAction {
  word:string
  translation:string
  image:string
  audioSrc:string
  trainClick: number
  rightAnswer: number
  errorAnswer: number
}
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent  {
  cardsDefaultClass = {
    actionA: [
      {
        word: 'cry',
        translation: 'плакать',
        image: './assets/img/cry.jpg',
        audioSrc: './assets/audio/cry.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'dance',
        translation: 'танцевать',
        image: './assets/img/dance.jpg',
        audioSrc: './assets/audio/dance.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'dive',
        translation: 'нырять',
        image: './assets/img/dive.jpg',
        audioSrc: './assets/audio/dive.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'draw',
        translation: 'рисовать',
        image: './assets/img/draw.jpg',
        audioSrc: './assets/audio/draw.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'fishing',
        translation: 'ловить рыбу',
        image: './assets/img/fish.jpg',
        audioSrc: './assets/audio/fishing.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'fly',
        translation: 'летать',
        image: './assets/img/fly.jpg',
        audioSrc: './assets/audio/fly.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'hug',
        translation: 'обнимать',
        image: './assets/img/hug.jpg',
        audioSrc: './assets/audio/hug.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'jump',
        translation: 'прыгать',
        image: './assets/img/jump.jpg',
        audioSrc: './assets/audio/jump.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
    ],
    actionB: [
      {
        word: 'open',
        translation: 'открывать',
        image: './assets/img/open.jpg',
        audioSrc: './assets/audio/open.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'play',
        translation: 'играть',
        image: './assets/img/play.jpg',
        audioSrc: './assets/audio/play.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'point',
        translation: 'указывать',
        image: './assets/img/point.jpg',
        audioSrc: './assets/audio/point.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: './assets/img/ride.jpg',
        audioSrc: './assets/audio/ride.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'run',
        translation: 'бегать',
        image: './assets/img/run.jpg',
        audioSrc: './assets/audio/run.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'sing',
        translation: 'петь',
        image: './assets/img/sing.jpg',
        audioSrc: './assets/audio/sing.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'skip',
        translation: 'прыгать',
        image: './assets/img/skip.jpg',
        audioSrc: './assets/audio/skip.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: './assets/img/swim.jpg',
        audioSrc: './assets/audio/swim.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
    ],
    outdoors: [
      {
        word: 'sidewalk',
        translation: 'тротуар',
        image: './assets/img/sidewalk.jpg',
        audioSrc: './assets/audio/sidewalk.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'road',
        translation: 'дорога',
        image: './assets/img/road.jpg',
        audioSrc: './assets/audio/road.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'tree',
        translation: 'дерево',
        image: './assets/img/tree.jpg',
        audioSrc: './assets/audio/tree.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'grass',
        translation: 'трава',
        image: './assets/img/grass.jpg',
        audioSrc: './assets/audio/grass.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'river',
        translation: 'река',
        image: './assets/img/river.jpg',
        audioSrc: './assets/audio/river.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'bus',
        translation: 'автобус',
        image: './assets/img/bus.jpg',
        audioSrc: './assets/audio/bus.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'train',
        translation: 'поезд',
        image: './assets/img/train.jpg',
        audioSrc: './assets/audio/train.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'sun',
        translation: 'солнце',
        image: './assets/img/sun.jpg',
        audioSrc: './assets/audio/sun.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
    ],
    house: [
      {
        word: 'table',
        translation: 'стол',
        image: './assets/img/table.jpg',
        audioSrc: './assets/audio/table.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'lamp',
        translation: 'лампа',
        image: './assets/img/lamp.jpg',
        audioSrc: './assets/audio/lamp.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'door',
        translation: 'дверь',
        image: './assets/img/door.jpg',
        audioSrc: './assets/audio/door.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'cupboard',
        translation: 'шкаф',
        image: './assets/img/cupboard.jpg',
        audioSrc: './assets/audio/cupboard.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'fridge',
        translation: 'холодильник',
        image: './assets/img/fridge.jpg',
        audioSrc: './assets/audio/fridge.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'window',
        translation: 'окно',
        image: './assets/img/window.jpg',
        audioSrc: './assets/audio/window.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'armchair',
        translation: 'кресло',
        image: './assets/img/armchair.jpg',
        audioSrc: './assets/audio/armchair.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'television',
        translation: 'телевизор',
        image: './assets/img/television.jpg',
        audioSrc: './assets/audio/television.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
    ],
    animalA: [
      {
        word: 'cat',
        translation: 'кот',
        image: './assets/img/cat.jpg',
        audioSrc: './assets/audio/cat.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        image: './assets/img/chick.jpg',
        audioSrc: './assets/audio/chick.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'chicken',
        translation: 'курица',
        image: './assets/img/chicken.jpg',
        audioSrc: './assets/audio/chicken.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'dog',
        translation: 'собака',
        image: './assets/img/dog.jpg',
        audioSrc: './assets/audio/dog.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: './assets/img/horse.jpg',
        audioSrc: './assets/audio/horse.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'pig',
        translation: 'свинья',
        image: './assets/img/pig.jpg',
        audioSrc: './assets/audio/pig.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        image: './assets/img/rabbit.jpg',
        audioSrc: './assets/audio/rabbit.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'sheep',
        translation: 'овца',
        image: './assets/img/sheep.jpg',
        audioSrc: './assets/audio/sheep.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
    ],
    animalB: [
      {
        word: 'bird',
        translation: 'птица',
        image: './assets/img/bird.jpg',
        audioSrc: './assets/audio/bird.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'fish',
        translation: 'рыба',
        image: './assets/img/fish1.jpg',
        audioSrc: './assets/audio/fish.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'frog',
        translation: 'жаба',
        image: './assets/img/frog.jpg',
        audioSrc: './assets/audio/frog.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'giraffe',
        translation: 'жираф',
        image: './assets/img/giraffe.jpg',
        audioSrc: './assets/audio/giraffe.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'lion',
        translation: 'лев',
        image: './assets/img/lion.jpg',
        audioSrc: './assets/audio/lion.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'mouse',
        translation: 'мышь',
        image: './assets/img/mouse.jpg',
        audioSrc: './assets/audio/mouse.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'turtle',
        translation: 'черепаха',
        image: './assets/img/turtle.jpg',
        audioSrc: './assets/audio/turtle.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
        image: './assets/img/dolphin.jpg',
        audioSrc: './assets/audio/dolphin.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
    ],
    clothes: [
      {
        word: 'skirt',
        translation: 'юбка',
        image: './assets/img/skirt.jpg',
        audioSrc: './assets/audio/skirt.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: './assets/img/pants.jpg',
        audioSrc: './assets/audio/pants.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: './assets/img/blouse.jpg',
        audioSrc: './assets/audio/blouse.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'dress',
        translation: 'платье',
        image: './assets/img/dress.jpg',
        audioSrc: './assets/audio/dress.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: './assets/img/boot.jpg',
        audioSrc: './assets/audio/boot.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: './assets/img/shirt.jpg',
        audioSrc: './assets/audio/shirt.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: './assets/img/coat.jpg',
        audioSrc: './assets/audio/coat.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: './assets/img/shoe.jpg',
        audioSrc: './assets/audio/shoe.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
    ],
    emotion: [
      {
        word: 'sad',
        translation: 'грустный',
        image: './assets/img/sad.jpg',
        audioSrc: './assets/audio/sad.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: './assets/img/angry.jpg',
        audioSrc: './assets/audio/angry.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: './assets/img/happy.jpg',
        audioSrc: './assets/audio/happy.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: './assets/img/tired.jpg',
        audioSrc: './assets/audio/tired.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: './assets/img/surprised.jpg',
        audioSrc: './assets/audio/surprised.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: './assets/img/scared.jpg',
        audioSrc: './assets/audio/scared.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: './assets/img/smile.jpg',
        audioSrc: './assets/audio/smile.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: './assets/img/laugh.jpg',
        audioSrc: './assets/audio/laugh.mp3',
        trainClick: 0,
        rightAnswer: 0,
        errorAnswer: 0,
      },
    ],
  };
  cardArray:cardsAction[] = [];
  constructor(private router: Router) {
    this.clickSort();
    if (localStorage.getItem('cardInnerArray') === null) {
      this.setLocalStorage();
    }
    this.getLocalStorageForRender();
    this.buttonReset()

  }
  setDefaultStore():void {
    const valueCard: cardsAction[][] = Object.values(cardsInnerClass);
    for (let i = 0; i < valueCard.length; i++) {
      for (let j = 0; j < valueCard[i].length; j++) {
        this.cardArray.push(valueCard[i][j]);
      }
    }
    localStorage.setItem('cardDefault', JSON.stringify(this.cardArray));
  }
  setLocalStorage():void {
    const allItems:cardsAction[] = [];
    const valueCard: cardsAction[][] = Object.values(cardsInnerClass);
    for (let i = 0; i < valueCard.length; i++) {
      for (let j = 0; j < valueCard[i].length; j++) {
        allItems.push(valueCard[i][j]);
      }
    }
    localStorage.setItem('cardInnerArray', JSON.stringify(allItems));
  }
  getLocalStorageForRender():void {
    const card: cardsAction[] = JSON.parse(localStorage.getItem('cardInnerArray')!);
    const cardAfterGame: cardsAction[] = JSON.parse(localStorage.getItem('cardsInnerArray')!);
    card.map((el) => {
      this.cardArray.push(el);
    });
    if (cardAfterGame) {
      cardAfterGame.map((el) => {
        this.cardArray.push(el);
      });
    }
  }
  errorCount(item: cardsAction):string {
    const percent = 100;
    const fixed = 2;
    const allAnswerRight = 0.00;
    const noMistake = 0;
    let error = ((item.errorAnswer * percent) / (item.rightAnswer + item.errorAnswer)).toFixed(fixed);
    if (item.rightAnswer === noMistake && item.errorAnswer === noMistake) {
      error = (allAnswerRight).toFixed(fixed);
    }
    return error;
  }
  buttonReset():void {
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement;
      if (target.classList.contains('reset')) {
        this.setDefaultStore();
        this.router.navigate(['game']).then( () => {this.router.navigate(['score'])});
        localStorage.clear();
      }
    })
  }
  repeatWords():void {
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement;
      if (target.classList.contains('repeatWords')) {
        const div = document.createElement('div');
        div.classList.add('repeatWords');
        div.innerHTML = ``;
      }
    });
  }
  sortScore(colNum: number, type: string | undefined, th: HTMLTableCellElement):void {
    const tbody = document.querySelector('tbody');
    const arrRows = Array.from(tbody!.rows);
    let compare;
    switch (type) {
      case 'number':
        compare = function (rowA: HTMLTableRowElement, rowB: HTMLTableRowElement) {
          const aRow = Number(rowA.cells[colNum].innerHTML);
          const bRow = Number(rowB.cells[colNum].innerHTML);
          return aRow - bRow;
        };
        break;
      case 'string':
        compare = function (rowA:HTMLTableRowElement, rowB: HTMLTableRowElement) {
          const aRow = Number(rowA.cells[colNum].innerHTML);
          const bRow = Number(rowB.cells[colNum].innerHTML);
          return aRow > bRow ? 1 : -1;
        };
        break;
      default:
    }
    if (th.classList.contains('sort_down')) {
      th.classList.remove('sort_down');
      th.classList.add('sort_up');
      arrRows.sort(compare).reverse();
    } else {
      th.classList.remove('sort_up');
      th.classList.add('sort_down');
      arrRows.sort(compare);
    }
    tbody!.append(...arrRows);
  }
  clickSort():void {
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLTableCellElement;
      if (target.tagName === 'TH') {
        const th = target;
        this.sortScore(th.cellIndex, th.dataset.type, th);
      }
    });
  }
}
