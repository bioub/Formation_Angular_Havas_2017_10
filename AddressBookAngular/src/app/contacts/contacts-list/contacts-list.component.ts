import { ContactService } from '../../core/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  public contacts: Contact[] = [];

  constructor(
    protected contactService: ContactService,
  ) {}

  ngOnInit() {
    this.contactService.getList().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

}
