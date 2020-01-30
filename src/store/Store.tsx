import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import { IRootState } from '../types';

const saveStateToLocalStorage = (state: IRootState) => {
  const serializedState = JSON.stringify(state);

  localStorage.setItem('state', serializedState);
};

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');

    // use initialState if no state is saved in localStorage
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const store = createStore(rootReducer, loadStateFromLocalStorage(), devToolsEnhancer({}));

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
