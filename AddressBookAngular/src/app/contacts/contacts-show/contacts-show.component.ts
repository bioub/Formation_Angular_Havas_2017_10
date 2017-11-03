import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Contact } from '../shared/contact.model';
import { ContactService } from '../../core/contact.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ab-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {

  public contact: Contact;

  constructor(
    protected contactService: ContactService,
    protected route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.contactService.getById(params.id))
      .subscribe(contact => {
        this.contact = contact;
      });
  }

}
