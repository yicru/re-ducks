import { createSelector } from 'reselect';
import { State } from 'store';

import { TodoType } from '../../../types/todo';

export const GetAllTodos = createSelector(
  (state: State) => state.todo,
  (todos: TodoType[]) => todos
);
