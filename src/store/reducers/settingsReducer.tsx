import produce from 'immer';
import { initialSettingsState } from '../initialState';
import { themes } from '../dictionaries';
import { ISettingsState, ISettingsAction } from '../../types';

const settingsReducer = (
  state: ISettingsState = initialSettingsState,
  action: ISettingsAction,
): ISettingsState =>
  produce(state, draft => {
    console.log(action);
    switch (action.type) {
      case 'settings/changeSnippet': {
        return;
      }

      case 'settings/changeTheme': {
        draft.editorSettings.theme = themes[action.payload];

        return;
      }

      case 'settings/changeFontSize': {
        draft.editorSettings.fontSize = Number(action.payload);

        return;
      }

      case 'settings/changeTabSize': {
        draft.editorSettings.tabSize = Number(action.payload);

        return;
      }

      case 'settings/toggleAutosave': {
        draft.editorSettings.autoSave = !draft.editorSettings.autoSave;

        return;
      }

      case 'settings/toggleWrapLines': {
        draft.editorSettings.wrapLines = !draft.editorSettings.wrapLines;

        return;
      }

      case 'settings/toggleShowGutter': {
        draft.editorSettings.showGutter = !draft.editorSettings.showGutter;

        return;
      }

      case 'settings/toggleHighlightActiveLine': {
        draft.editorSettings.highlightActiveLine = !draft.editorSettings.highlightActiveLine;

        return;
      }
    }
  });

export default settingsReducer;
