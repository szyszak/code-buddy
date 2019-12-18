import { IState, IAction } from '../types';

const StoreReducer = (state: IState, action: IAction): IState => {
  console.log(action);
  switch (action.type) {
    case 'snippets/add': {
      // zmienic any na IState
      const newState: any = {};

      return newState;
    }

    default:
      return state;
  }
};

export default StoreReducer;
