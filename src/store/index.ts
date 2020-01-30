import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import todo from './todo';

const reducers = combineReducers({ todo });

export const Store = createStore(reducers, composeWithDevTools());

export type State = ReturnType<typeof Store.getState>;
