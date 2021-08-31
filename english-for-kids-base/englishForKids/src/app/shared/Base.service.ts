import {Injectable} from '@angular/core';
import {cardsInnerClass} from '../app.component';
export interface cardsAction {
  word:string
  translation:string
  image:string
  audioSrc:string
  trainClick: number
  rightAnswer: number
  errorAnswer: number
}
@Injectable({ providedIn: 'root' })
export class BaseService {
  arrInnerForGame:cardsAction[] = [];
  setLocal():void {
    localStorage.setItem('cardsInner', JSON.stringify(cardsInnerClass));
  }
  getArrForRender(obj: any, id: string | null): cardsAction[] {
    for (const key in obj) {
      if (id === key) {
        this.arrInnerForGame = Object.values(obj[key]);
      }
    }
    return this.arrInnerForGame;
  }
  getIdForRenderGame():void {
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('imgMainStart')
        || target.classList.contains('flex-column-reverse')
        || target.classList.contains('text__cardStart')) {
        const siblings = target.closest('div') as HTMLElement;
        const idCards = siblings.getAttribute('id');
        this.getArrForRender(cardsInnerClass, idCards);
      }
      if (target.classList.contains('hamburger__a')) {
        const idCard = target.getAttribute('id');
        this.getArrForRender(cardsInnerClass, idCard);
      }
    });
  }
  setDate():cardsAction[] {
    return this.arrInnerForGame;
  }
}
