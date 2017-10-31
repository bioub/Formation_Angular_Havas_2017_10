import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `
    <div>
      <todo-details *ngFor="let t of todos" [todo]="t"></todo-details>
    </div>
  `,
  styles: []
})
export class ListComponent {

  @Input()
  public todos = [];

}
