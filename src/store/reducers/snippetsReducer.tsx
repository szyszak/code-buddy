import produce from 'immer';
import { initialSnippetsState } from '../initialState';
import { ISnippetsState, ISnippetsAction } from '../../types';

const snippetsReducer = (
  state: ISnippetsState = initialSnippetsState,
  action: ISnippetsAction,
): ISnippetsState =>
  produce(state, draft => {
    console.log(action);
    switch (action.type) {
      case 'snippets/add': {
        return;
      }

      case 'snippets/remove': {
        return;
      }

      case 'snippets/update': {
        // tutaj powinna odbywac sie zmiana jezyka
        return;
      }
    }
  });

export default snippetsReducer;
