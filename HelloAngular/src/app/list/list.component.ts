import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-list',
  template: `
    <p *ngFor="let c of contacts; let i = index; let isLast = last">
      {{c?.prenom}}
      <button *ngIf="isLast">+</button>
    </p>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  public contacts = [{
    prenom: 'John',
    nom: 'Doe',
  }, {
    prenom: 'Toto',
    nom: 'Titi'
  }, null];

  constructor() { }

  ngOnInit() {
  }

}
