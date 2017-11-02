import { Component } from '@angular/core';

@Component({
  selector: 'hello-root',
  template: `
    <hello-horloge></hello-horloge>
    <hello-prenom></hello-prenom>
    <hello-list></hello-list>
    <hello-ui-horloge format="HH:mm:ss" [delay]="3 * 1000"></hello-ui-horloge>
    <hello-ui-prenom (prenomChange)="onPrenomChange($event)"></hello-ui-prenom>
    <hello-ui-prenom [prenom]="prenom" (prenomChange)="onPrenomChange($event)"></hello-ui-prenom>
    <hello-ui-prenom [(prenom)]="prenom"></hello-ui-prenom>
    {{prenom}}
  `,
})
export class AppComponent {
  public prenom = 'Romain';
  public onPrenomChange(prenom) {
    this.prenom = prenom;
  }
}
