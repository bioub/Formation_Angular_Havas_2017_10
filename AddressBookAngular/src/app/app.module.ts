import { ContactsModule } from './contacts/contacts.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ContactsModule,
    AppRoutingModule, // reste à la fin à cause de NotFound
    BrowserAnimationsModule, // @anim
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
