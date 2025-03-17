import { Component, inject, OnInit, signal} from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todos.type';
import { catchError } from 'rxjs';
import { TodosItemsComponent } from '../components/todos-items/todos-items.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';


@Component({
  selector: 'app-todos',
  imports: [TodosItemsComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit
{

  // you have to inject the service here
  todoService = inject(TodosService);
  todoItems= signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService
    .getTodosFromApi()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos) => {
      this.todoItems.set(todos);
    })
  }

  // create a function
  updateTodoItem(todoItem : Todo){

    this.todoItems.update((todos) => {
      return todos.map(todo => {
        if(todo.id == todoItem.id )
        {
          return{
            ... todo,
            completed: !todo.completed
          }
        }
        return todo;
      });
    });

  }

}
