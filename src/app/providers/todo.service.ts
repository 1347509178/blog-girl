import { Injectable } from '@angular/core';
import {Todo} from '../interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private data: Todo[] = [
    {id: 999, description: 'For test purpose', category: 2, content: 'test'},
    {id: 998, description: 'For test purpose aaa', category: 1, content: 'test'},
    {id: 997, description: 'For test purpose', category: 0, content: 'test'},
  ];
  constructor() { }

  getTodos(): Todo[] {
    return this.data;
  }

  delete(ids: number[]): Todo[] {
    // number组成的数组
    this.data = this.data.filter(item => ids.indexOf(item.id) === -1);
    return this.data;
  }
}
