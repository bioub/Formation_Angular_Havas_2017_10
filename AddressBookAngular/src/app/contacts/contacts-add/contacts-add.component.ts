import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact.model';
import { ContactService } from '../../core/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  public newContact = new Contact({name: ''});

  constructor(
    protected contactService: ContactService,
    protected router: Router,
  ) { }

  ngOnInit() {
  }

  ajouterContact() {
    this.contactService.add(this.newContact)
      .subscribe(contact => {
        this.contactService.events.emit('contact.written');
        this.router.navigate([
          'contacts', contact.id
        ]);
      });
  }
}
