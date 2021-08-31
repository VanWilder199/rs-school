import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class CardsService {
  isCheck = false;
  rotateCards():void {
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('img__small')) {
        const card = target.closest('div');
        card!.classList.add('rotate');
        const cards = document.querySelectorAll('.flex-column-reverse');
        cards.forEach((el) => {
          el.addEventListener('mouseleave', (event) => {
            const targetMouseLeave = event.target as HTMLElement;
            if (targetMouseLeave.classList.contains('flex-column-reverse')) {
              const cardImg = document.querySelectorAll('.text__cards');
              cardImg.forEach((element) => {
                element.classList.remove('rotate');
              });
            }
          });
        });
      }
    });
  }
  clickHamburger():void {
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('hamburger') || target.classList.contains('.hamburger__line')) {
        const innerHamburger = document.querySelector('.wrapper__innerHamburger');
        const main = document.querySelector('main');
        innerHamburger!.classList.remove('hide');
        innerHamburger!.classList.add('open');
        main!.classList.add('blur');
      }
    });
  }
  closeHamburger():void {
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const innerHamburger = document.querySelector('.wrapper__innerHamburger');
      const main = document.querySelector('main');
      if (target.classList.contains('exit') || target.classList.contains('hamburger__a')) {
        innerHamburger!.classList.add('hide');
        main!.classList.remove('blur');
      }
    });
  }
  toggleActiveLink():void {
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('hamburger__a')) {
        this.removeActiveLink();
        target.classList.add('hamburger_active');
      }
    });
  }
  removeActiveLink():void {
    const hamburgetLink = document.querySelectorAll('.hamburger__a');
    hamburgetLink.forEach((el) => {
      el.classList.remove('hamburger_active');
    });
  }
}
