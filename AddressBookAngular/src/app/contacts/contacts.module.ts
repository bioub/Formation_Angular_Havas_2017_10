import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';

@NgModule({
  imports: [
    SharedModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsComponent, ContactsListComponent, ContactsAddComponent, ContactsShowComponent]
})
export class ContactsModule { }
