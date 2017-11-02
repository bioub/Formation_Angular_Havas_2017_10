import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorlogeComponent } from './horloge/horloge.component';
import { PrenomComponent } from './prenom/prenom.component';
import { ListComponent } from './list/list.component';
import { UiHorlogeComponent } from './ui-horloge/ui-horloge.component';
import { UiPrenomComponent } from './ui-prenom/ui-prenom.component';

@NgModule({
  declarations: [
    AppComponent,
    HorlogeComponent,
    PrenomComponent,
    ListComponent,
    UiHorlogeComponent,
    UiPrenomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
