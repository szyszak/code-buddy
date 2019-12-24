export interface ISnippet {
  title: string;
  language: string;
  value: string;
  id: string;
}

export interface ISettings {
  currentSnippet: string;
  language: string;
  theme: string;
  autoSave: boolean;
  fontSize: number;
  tabSize: number;
  wrapLines: boolean;
  showGutter: boolean;
  highlightActiveLine: boolean;
}

export interface IDropdownOptions {
  languages: string[];
  themes: string[];
  fontSizes: number[];
  tabSizes: number[];
}

export type IState = {
  snippets: ISnippet[];
  settings: ISettings;
  dropdownOptions: IDropdownOptions;
};

export type IAction =
  | { type: 'snippets/add', payload: ISnippet }
  | { type: 'snippets/remove', payload: string }
  | { type: 'snippets/update', payload: ISnippet }
  | { type: 'settings/changeSnippet', payload: string }
  | { type: 'settings/changeLanguage', payload: string }
  | { type: 'settings/changeTheme', payload: string }
  | { type: 'settings/changeFontSize', payload: number }
  | { type: 'settings/changeTabSize', payload: number }
  | { type: 'settings/toggleAutosave' }
  | { type: 'settings/toggleWrapLines' }
  | { type: 'settings/toggleShowGutter' }
  | { type: 'settings/toggleHighlightActiveLine' }

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export interface IDictionary {
  [key: string]: string;
}