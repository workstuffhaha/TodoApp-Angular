import { Component, input , output, Pipe} from '@angular/core';
import { Todo } from '../../model/todos.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos-items',
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todos-items.component.html',
  styleUrl: './todos-items.component.scss'
})
export class TodosItemsComponent {
  todo= input.required<Todo>();

  todoToggled =output<Todo>();

  todoClicked(){
    this.todoToggled.emit(this.todo());
  }

}
