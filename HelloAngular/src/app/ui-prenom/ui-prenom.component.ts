import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hello-ui-prenom',
  template: `
    <p>
      <input (input)="modifyPrenom($event)" [value]="prenom">
    </p>
  `,
})
export class UiPrenomComponent {

  @Input()
  public prenom = '';
  @Output()
  public prenomChange = new EventEmitter<string>();

  modifyPrenom(e) {
    this.prenomChange.emit(e.target.value);
    /*
    this.prenomChange.subscribe((prenom) => {

    })
    */
  }

}
