import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [{
  path: 'contacts',
  component: ContactsComponent,
  children: [{
    path: 'add',
    component: ContactsAddComponent,
    data: {
      state: 'contacts.add'
    }
  }, {
    path: ':id',
    component: ContactsShowComponent,
    data: {
      state: 'contacts.show'
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
