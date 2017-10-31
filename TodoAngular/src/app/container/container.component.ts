import { Component } from '@angular/core';

@Component({
  selector: 'todo-container',
  template: `
    <todo-form (todoCreated)="addTodo($event)"></todo-form>
    <todo-list [todos]="todos"></todo-list>
  `,
  styles: []
})
export class ContainerComponent  {

  public todos = [{value:'Todo 1'}, {value:'Todo 2'}];

  public addTodo(newTodo) {
    this.todos.unshift(newTodo);
  }
}
