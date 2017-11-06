import { ContactService } from '../../core/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact.model';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  exportAs: 'contactsList'
})
export class ContactsListComponent implements OnInit {

  public contacts: Contact[] = [];

  constructor(
    protected contactService: ContactService,
  ) {}

  ngOnInit() {
    this.refreshContacts();
    this.contactService.events
      .filter(e => e === 'contact.written')
      .subscribe(e => {
        this.refreshContacts();
      });
  }

  refreshContacts() {
    this.contactService.getList().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

}
