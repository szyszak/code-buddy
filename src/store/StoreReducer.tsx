import { IState, IAction } from '../types';

const StoreReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'snippets/add': {
      const newState: IState = {};

      return newState;
    }

    default:
      return state;
  }
};

export default StoreReducer;
