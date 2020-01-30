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
        return draft.filter(snippet => {
          return snippet.id !== action.payload;
        });
      }

      case 'snippets/changeLanguage': {
        const snippetToChange = draft.find(snippet => snippet.id === action.id);

        snippetToChange!.language = action.payload;

        return;
      }

      case 'snippets/changeTitle': {
        const snippetToChange = draft.find(snippet => snippet.id === action.id);

        snippetToChange!.title = action.payload;

        return;
      }

      case 'snippets/changeValue': {
        const snippetToChange = draft.find(snippet => snippet.id === action.id);

        snippetToChange!.value = action.payload;

        return;
      }
    }
  });

export default snippetsReducer;
