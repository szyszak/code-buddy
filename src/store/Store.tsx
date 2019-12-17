import React, { useReducer, createContext } from 'react';
// import initialState from './initialState';
import StoreReducer from './StoreReducer';
import { IContext } from '../types';

const StoreContext = createContext<IContext>({} as IContext);

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, []);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
