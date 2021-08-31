import { Input, NgModule } from '@angular/core';
import { IsActiveMatchOptions, RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { CardsInnerGameComponent } from './cards-inner-game/cards-inner-game.component';
import { CardsComponent } from './cards/cards.component';
import { RepeatDifficultComponent } from './repeat-difficult/repeat-difficult.component';

const routes: Routes = [
  { path: 'score', component: ScoreComponent },
  { path: 'score/repeatDifficult', component: RepeatDifficultComponent },
  { path: 'game', component: CardsInnerGameComponent },
  { path: '', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
  @Input() routerLinkActive: string | string[];

  routerLinkActiveOptions: {
    exact: boolean;
  } | IsActiveMatchOptions;
}
