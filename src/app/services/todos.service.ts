import { Injectable, inject } from '@angular/core';
import { Todo } from '../model/todos.type';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http= inject(HttpClient);

  // this function will return an observable of type object - in this case that will be todo type
  getTodosFromApi(){
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
