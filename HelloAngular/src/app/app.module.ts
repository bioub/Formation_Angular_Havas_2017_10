import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorlogeComponent } from './horloge/horloge.component';
import { PrenomComponent } from './prenom/prenom.component';

@NgModule({
  declarations: [
    AppComponent,
    HorlogeComponent,
    PrenomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
