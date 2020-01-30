import { Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import { produce } from 'immer';

import { TodoType } from '../../../types/todo';
import { Add, ToggleChecked, Delete } from '..';

const initialState: TodoType[] = [];

export const reducer: Reducer<TodoType[]> = (state = initialState, action) => {
  if (isType(action, Add)) {
    return produce(state, draft => {
      draft.push({ text: action.payload.text, isChecked: false });
    });
  }
  if (isType(action, ToggleChecked)) {
    return produce(state, draft => {
      draft[action.payload.index].isChecked = !draft[action.payload.index]
        .isChecked;
    });
  }
  if (isType(action, Delete)) {
    return produce(state, draft => {
      draft.splice(action.payload.index, 1);
    });
  }
  return state;
};

export default reducer;
