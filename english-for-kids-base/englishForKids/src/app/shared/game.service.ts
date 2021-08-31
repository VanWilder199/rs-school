import { Injectable } from '@angular/core';
import { cardsAction } from '../score/score.component';
import { cardsInnerClass } from '../app.component';
@Injectable({ providedIn: 'root' })
export class GameService {
  private isCheck: boolean;
  constructor() {
    this.isCheck = true;
  }
  i = 0;
  audioSet: string[] = [];
  audioValue: string[] = [];
  errorCounter = 0;
  cardArray = [];
  valueCards = 8;
  checkGame():boolean {
    this.isCheck = !this.isCheck;
    if (!this.isCheck) {
      this.toggleActive();
    } else {
      this.toggleDisabled();
    }
    return this.isCheck;
  }
  renderButtonForGame():void {
    if (!this.checkGame()) {
      const header = document.querySelector('header') as HTMLElement;
      const btn = document.createElement('button');
      const btnRepeat = document.createElement('button');
      const ratingStarRender = document.createElement('div');
      ratingStarRender.classList.add('rating-star');
      btnRepeat.innerHTML = 'Repeat';
      btnRepeat.classList.add('repeat__button');
      btnRepeat.classList.add('hide');
      btn.innerHTML = 'Start Game';
      btn.classList.add('button');
      header.appendChild(btn);
      header.appendChild(btnRepeat);
      header.appendChild(ratingStarRender);
    } else {
      const btnRemove = document.querySelector('.button') as HTMLButtonElement;
      const btnRepeatRemove = document.querySelector('.repeat__button') as HTMLButtonElement;
      const ratingStar = document.querySelector('.rating-star') as HTMLButtonElement;
      if (ratingStar) {
        ratingStar.remove();
      }
      btnRemove.remove();
      btnRepeatRemove.remove();
      this.audioSet = [];
      this.audioValue = [];
      this.cardArray = [];
      this.i = 0;
    }
  }
  countRightClick(nameCard:string):void {
    const allItems:cardsAction[] = [];
    const valueCard: cardsAction[][] = Object.values(cardsInnerClass);
    for (let i = 0; i < valueCard.length; i++) {
      for (let j = 0; j < valueCard[i].length; j++) {
        if (valueCard[i][j].word === nameCard) {
          valueCard[i][j].rightAnswer++;
        }
        allItems.push(valueCard[i][j]);
      }
    }
    localStorage.setItem('cardsInnerArray', JSON.stringify(allItems));
  }
  countErrorClick(nameCard:string):void {
    const allItems:cardsAction[] = [];
    const valueCard: cardsAction[][] = Object.values(cardsInnerClass);
    for (let i = 0; i < valueCard.length; i++) {
      for (let j = 0; j < valueCard[i].length; j++) {
        if (valueCard[i][j].word === nameCard) {
          valueCard[i][j].errorAnswer++;
        }
        allItems.push(valueCard[i][j]);
      }
    }
    localStorage.setItem('cardsInnerArray', JSON.stringify(allItems));
  }
  playAudioWord(item: string):void {
    const audio = document.createElement('audio');
    audio.src = item;
    audio.play();
  }
  startGame():void {
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement;
      const repeatBtn = document.querySelector('.repeat__button') as HTMLButtonElement;
      const valueForRandom = 0.5;
      const arrLenghth = 0;
      if (target.classList.contains('button')) {
        target.classList.add('btnGame_pressed');
        target.classList.add('hide');
        repeatBtn.classList.remove('hide');
        if (this.audioValue.length !== arrLenghth) {
          this.audioValue = [];
          this.audioSet = [];
        }
        document.querySelectorAll('.wrapper').forEach((item) => {
          const value: string = item.id;
          this.audioValue.push(value);
        });
        this.audioValue.sort(() => valueForRandom - Math.random());
        this.audioValue.forEach((item) => this.audioSet.push(`./assets/audio/${item}.mp3`));
        this.playAudioWord(this.audioSet[this.i]);
        this.repeatButtonGame();
      }
    });
  }
  repeatButtonGame():void {
    const btn = document.querySelector('.repeat__button') as HTMLElement;
    const audio = document.createElement('audio');
    btn.addEventListener('click', () => {
      audio.src = this.audioSet[this.i];
      audio.play();
    });
  }
  compareAudioandCardGame(audio:string, value: string, target:HTMLElement):void {
    const audioSuccess = './assets/audio/good.mp3';
    const audioBad = './assets/audio/bad.mp3';
    const audioForPlay = document.createElement('audio');
    if (value === audio) {
      target.classList.add('win');
      this.countRightClick(value);
      this.implementStar('result_good');
      audioForPlay.src = audioSuccess;
      audioForPlay.play();
      this.i++;
      if (this.i === this.valueCards) {
        this.checkMistakeForRenderCongrats();
      }
      if (this.i < this.valueCards) {
        setTimeout(() => {
          this.playAudioWord(this.audioSet[this.i]);
        }, 1000);
      }
    } else {
      this.countErrorClick(value);
      this.implementStar('result_bad');
      audioForPlay.src = audioBad;
      audioForPlay.play();
      this.errorCounter += 1;
    }
  }
  clickCompare():void {
    document.body.addEventListener('click', (e) => {
      if (!this.isCheck) {
        const target = e.target as HTMLElement;
        if (target.classList.contains('imgMain') && !target.classList.contains('win')) {
          const cardValue = target.id;
          this.compareAudioandCardGame(this.audioValue[this.i], cardValue, target);
        }
      }
    });
  }
  implementStar(star:string):void {
    const result = document.createElement('div');
    const main = document.querySelector('.rating-star') as HTMLElement;
    result.classList.add(`${star}`);
    main.appendChild(result);
  }
  checkMistakeForRenderCongrats():void {
    const mistakeZero = 0;
    const divForConrats = document.createElement('div');
    const divForWrapper = document.createElement('div');
    const mistakeDiv = document.createElement('div');
    mistakeDiv.classList.add('mistakeCounter');
    divForWrapper.classList.add('wrapperCongrats');
    const audioSuccess = './assets/audio/success.mp3';
    const audioBad = './assets/audio/fail.mp3';
    const audio = document.createElement('audio');
    audio.classList.add('congrats');
    if (this.errorCounter === mistakeZero) {
      setTimeout(() => {
        audio.src = audioSuccess;
        audio.play();
        divForConrats.classList.add('result-success');
        divForWrapper.append(divForConrats);
        document.body.appendChild(divForWrapper);
      }, 1000);
      setTimeout(() => {
        divForWrapper.remove();
        window.location.href = '';
      }, 6000);
    } else {
      setTimeout(() => {
        audio.src = audioBad;
        audio.play();
        divForConrats.classList.add('result-fail');
        mistakeDiv.innerHTML = `You made ${this.errorCounter} mistakes`;
        divForWrapper.append(mistakeDiv);
        divForWrapper.appendChild(divForConrats);
        document.body.appendChild(divForWrapper);
      }, 1000);
      setTimeout(() => {
        divForWrapper.remove();
        mistakeDiv.remove();
        window.location.href = '';
      }, 6000);
    }
  }
  toggleActive():void {
    const divTextCards = document.querySelectorAll('.text__cards');
    const divWrapper = document.querySelectorAll('.cards');
    const main = document.querySelector('body');
    main!.classList.add('active');
    divTextCards.forEach((el) => {
      el.classList.add('hide');
    });
    divWrapper.forEach((el) => {
      el.classList.add('hideAttr');
    });
  }
  toggleDisabled():void {
    const divTextCards = document.querySelectorAll('.text__cards');
    const divWrapper = document.querySelectorAll('.cards');
    const img = document.querySelectorAll('.imgMain');
    const main = document.querySelector('body');
    divTextCards.forEach((el) => {
      el.classList.remove('hide');
    });
    divWrapper.forEach((el) => {
      el.classList.remove('hideAttr');
    });
    img.forEach((el) => {
      el.classList.remove('win');
    });
    main!.classList.remove('active');
  }
  countTrainClick(nameCard:string):void {
    const allItems:cardsAction[] = [];
    const valueCard: cardsAction[][] = Object.values(cardsInnerClass);
    for (let i = 0; i < valueCard.length; i++) {
      for (let j = 0; j < valueCard[i].length; j++) {
        if (valueCard[i][j].word === nameCard) {
          valueCard[i][j].trainClick++;
        }
        allItems.push(valueCard[i][j]);
      }
    }
    localStorage.setItem('cardsInnerArray', JSON.stringify(allItems));
  }
  audioCards():void {
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('text__cards') || (target.classList.contains('imgMain'))) {
        if (this.isCheck) {
          const valueTarget = target.id;
          this.countTrainClick(valueTarget);
          const rotate = document.querySelectorAll('.rotate');
          const rotateZero = 0;
          if (rotate.length !== rotateZero) { return; }
          const cards = target.closest('.wrapper') as HTMLElement;
          const audio = cards!.firstElementChild as HTMLAudioElement;
          audio!.play();
        }
      }
    });
  }
}
