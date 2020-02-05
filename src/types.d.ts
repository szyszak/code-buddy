import rootReducer from './store/reducers/rootReducer'

export interface ISnippet {
  title: string;
  language: string;
  value: string;
  id: string;
}

export interface IEditorSettings {
  currentSnippetId: string;
  theme: string;
  fontSize: number;
  tabSize: number;
  autoSave: boolean;
  wrapLines: boolean;
  showGutter: boolean;
  highlightActiveLine: boolean;
}

export type ISnippetsState = ISnippet[];

export type ISettingsState = {
  currentSnippet: ISnippet;
  editorSettings: IEditorSettings;
}

export type ISnippetsAction =
  | { type: 'snippets/add', payload: ISnippet }
  | { type: 'snippets/remove', payload: string }
  | { type: 'snippets/changeLanguage', payload: string, id: string }
  | { type: 'snippets/changeTitle', payload: string, id: string }
  | { type: 'snippets/changeValue', payload: string, id: string }

export type ISettingsAction =
  | { type: 'settings/changeSnippet', payload: ISnippet }
  | { type: 'settings/changeCurrentSnippetId', payload: string }
  | { type: 'settings/changeTheme', payload: string }
  | { type: 'settings/changeFontSize', payload: number }
  | { type: 'settings/changeTabSize', payload: number }
  | { type: 'settings/toggleAutosave' }
  | { type: 'settings/toggleWrapLines' }
  | { type: 'settings/toggleShowGutter' }
  | { type: 'settings/toggleHighlightActiveLine' }

export type IAction = ISnippetsAction | ISettingsAction

export type IRootState = ReturnType<typeof rootReducer>;

export interface IDictionary {
  [key: string]: string;
}