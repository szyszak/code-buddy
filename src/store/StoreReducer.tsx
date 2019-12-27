import produce from 'immer';
import { languages, themes } from './Dictionaries';
import { IState, IAction } from '../types';

const StoreReducer = (state: IState, action: IAction): IState =>
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
        return;
      }

      case 'settings/changeSnippet': {
        return;
      }

      case 'settings/changeLanguage': {
        const currentSnippetData = draft.snippets.find(
          snippet => snippet.id === draft.settings.currentSnippetId
        );

        currentSnippetData!.language = languages[action.payload];

        return;
      }

      case 'settings/changeTheme': {
        draft.settings.theme = themes[action.payload];

        return;
      }

      case 'settings/changeFontSize': {
        draft.settings.fontSize = Number(action.payload);

        return;
      }

      case 'settings/changeTabSize': {
        draft.settings.tabSize = Number(action.payload);

        return;
      }

      case 'settings/toggleAutosave': {
        draft.settings.autoSave = !draft.settings.autoSave;

        return;
      }

      case 'settings/toggleWrapLines': {
        draft.settings.wrapLines = !draft.settings.wrapLines;

        return;
      }

      case 'settings/toggleShowGutter': {
        draft.settings.showGutter = !draft.settings.showGutter;

        return;
      }

      case 'settings/toggleHighlightActiveLine': {
        draft.settings.highlightActiveLine = !draft.settings.highlightActiveLine;

        return;
      }
    }
  });

export default StoreReducer;
