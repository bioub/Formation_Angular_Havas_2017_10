import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-form',
  template: `
    <form (submit)="addTodo()">
      <input [(ngModel)]="newTodo.value" name="newTodo">
      <button>+</button>
    </form>
  `,
  styles: []
})
export class FormComponent {

  @Output()
  public todoCreated = new EventEmitter();

  public newTodo = {value:''};

  public addTodo() {
    this.todoCreated.emit({...this.newTodo});
  }
}
