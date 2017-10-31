import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-details',
  template: `
    <p>
      {{todo.value}}
    </p>
  `,
  styles: []
})
export class DetailsComponent {

  @Input()
  public todo = {value: ''};

}
