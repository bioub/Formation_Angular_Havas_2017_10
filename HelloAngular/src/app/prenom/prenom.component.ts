import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-prenom',
  template: `
    <div>Prénom : <input (input)="modifierPrenom($event)"></div>
    <p [ngClass]="{red: prenom === 'Red'}">
      Bonjour {{prenom}} !
    </p>
  `,
  styles: [
    `
    .red {
      color: red;
    }
    `
  ]
})
export class PrenomComponent {

  public prenom = 'Inconnu';

  public modifierPrenom(e) {
    this.prenom = e.target.value;
  }
}
