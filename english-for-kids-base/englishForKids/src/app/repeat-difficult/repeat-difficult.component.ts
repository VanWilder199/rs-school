import { Component } from '@angular/core';
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
  selector: 'app-repeat-difficult',
  templateUrl: './repeat-difficult.component.html',
  styleUrls: ['./repeat-difficult.component.scss'],
})
export class RepeatDifficultComponent {
  arrMistake: cardsAction[] = [];
  constructor() {
    this.getAllMistake();
  }
  getAllMistake():void {
    if (localStorage.getItem('cardsInnerArray') != null) {
      const mistake:cardsAction[] = JSON.parse(localStorage.getItem('cardsInnerArray')!);
      mistake.map((el) => {
        if (el.errorAnswer > 0) {
          this.arrMistake.push(el);
        }
      });
    }
  }
}
