import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Contact } from '../contacts/shared/contact.model';
import { environment } from '../../environments/environment';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const url = `${environment.restUrl}/users`;

@Injectable()
export class ContactService {

  // ReplaySubject

  constructor(
    protected httpClient: HttpClient
  ) { }

  public getList(): Observable<Contact[]> {
    return this.httpClient
               .get<Contact[]>(url);
  }

  public getById(id: number | string): Observable<Contact> {
    return this.httpClient
               .get<Contact>(`${url}/${id}`);
  }
}
