import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../contacts/shared/contact.model';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class FakeContactService {

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
    return Observable.of(this.contacts)
            .delay(1200);
  }

  public getById(id: number | string): Observable<Contact> {
    if (typeof id === 'string') {
      id = Number(id);
    }

    const contact = this.contacts.find(c => c.id === id);

    return Observable.of(contact)
      .delay((id === 123) ? 5000 : 1000);
  }
}
