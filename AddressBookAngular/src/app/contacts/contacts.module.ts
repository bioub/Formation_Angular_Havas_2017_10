import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ContactsRoutingModule
  ],
  declarations: []
})
export class ContactsModule { }
