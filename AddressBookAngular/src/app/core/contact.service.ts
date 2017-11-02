import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../contacts/shared/contact.model';

@Injectable()
export class ContactService {

  public contacts: Contact[] = [
    new Contact({
      id: 123,
      name: 'Steve Jobs',
    }),
    new Contact({
      id: 456,
      name: 'Bill Gates',
    })
  ];

  constructor() { }

  public getList(): Observable<Contact[]> {

  }
}
