import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-horloge',
  template: `
    <p [textContent]="heure"></p>
    <input [value]="heure">
    {{heure}}
  `,
  styles: []
})
export class HorlogeComponent implements OnInit {

  public heure = new Date();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.heure = new Date();
    }, 1000);
  }

}
