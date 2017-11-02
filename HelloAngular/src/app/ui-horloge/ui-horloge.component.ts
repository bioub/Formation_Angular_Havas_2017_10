import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello-ui-horloge',
  template: `
    {{heure | date:format}}
  `,
  styles: []
})
export class UiHorlogeComponent implements OnInit {

public heure;
@Input()
public format = 'medium';
@Input()
public delay = 1000;

constructor() { }

ngOnInit() {
  this.updateHeure();
}

updateHeure() {
  this.heure = new Date();
  setTimeout(this.updateHeure.bind(this), this.delay);
}

}
