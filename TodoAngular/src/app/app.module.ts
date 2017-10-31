import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ListComponent,
    DetailsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
