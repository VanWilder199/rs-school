import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardsInnerGameComponent } from './cards-inner-game/cards-inner-game.component';
import { CardsService } from './shared/cards.service';
import { ScoreComponent } from './score/score.component';
import { RepeatDifficultComponent } from './repeat-difficult/repeat-difficult.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsInnerGameComponent,
    ScoreComponent,
    RepeatDifficultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private CardsService: CardsService) {
    CardsService.clickHamburger();
    CardsService.closeHamburger();
  }
}
