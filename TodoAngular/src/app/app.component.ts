import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  template: `
    <todo-container></todo-container>
  `,
  styles: []
})
export class AppComponent {
  title = 'todo';
}
