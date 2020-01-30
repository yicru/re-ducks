import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory('TODO');

export const Add = actionCreator<{ text: string }>('ADD');
export const ToggleChecked = actionCreator<{ index: number }>('TOGGLE_CHECKED');
export const Delete = actionCreator<{ index: number }>('DELETE');
