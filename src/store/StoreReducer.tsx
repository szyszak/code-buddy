import produce from 'immer';
import { languages, themes } from './Dictionaries';
import { IState, IAction } from '../types';

const StoreReducer = (state: IState, action: IAction): IState => {
  console.log(action);
  switch (action.type) {
    case 'snippets/add': {
      const newState: any = {};

      return newState;
    }

    case 'snippets/remove': {
      const newState: any = {};

      return newState;
    }

    case 'snippets/update': {
      const newState: any = {};

      return newState;
    }

    case 'settings/changeSnippet': {
      const newState: any = {};

      return newState;
    }

    case 'settings/changeLanguage': {
      const newState = produce(state, draftState => {
        const currentSnippetData = draftState.snippets.find(
          snippet => snippet.id === draftState.settings.currentSnippetId
        );

        currentSnippetData!.language = languages[action.payload];
      });

      return newState;
    }

    case 'settings/changeTheme': {
      const newState = produce(state, draftState => {
        draftState.settings.theme = themes[action.payload];
      });

      return newState;
    }

    case 'settings/changeFontSize': {
      const newState = produce(state, draftState => {
        draftState.settings.fontSize = Number(action.payload);
      });

      return newState;
    }

    case 'settings/changeTabSize': {
      const newState = produce(state, draftState => {
        draftState.settings.tabSize = Number(action.payload);
      });

      return newState;
    }

    case 'settings/toggleAutosave': {
      const newState = produce(state, draftState => {
        draftState.settings.autoSave = !state.settings.autoSave;
      });

      return newState;
    }

    case 'settings/toggleWrapLines': {
      const newState = produce(state, draftState => {
        draftState.settings.wrapLines = !state.settings.wrapLines;
      });

      return newState;
    }

    case 'settings/toggleShowGutter': {
      const newState = produce(state, draftState => {
        draftState.settings.showGutter = !state.settings.showGutter;
      });

      return newState;
    }

    case 'settings/toggleHighlightActiveLine': {
      const newState = produce(state, draftState => {
        draftState.settings.highlightActiveLine = !state.settings.highlightActiveLine;
      });

      return newState;
    }

    default:
      return state;
  }
};

export default StoreReducer;
