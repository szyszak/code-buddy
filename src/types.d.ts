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
  firstVisit: boolean;
}

export interface IDropdownOptions {
  languages: string[];
  themes: string[];
  fontSizes: number[];
  tabSizes: number[];
}

export type ISnippetsState = ISnippet[];

export type ISettingsState = {
  currentSnippet: ISnippet;
  editorSettings: IEditorSettings;
  dropdownOptions: IDropdownOptions;
}

export type ISnippetsAction =
  | { type: 'snippets/add', payload: ISnippet }
  | { type: 'snippets/remove', payload: string }
  | { type: 'snippets/update', payload: ISnippet }

export type ISettingsAction =
  | { type: 'settings/changeSnippet', payload: string }
  | { type: 'settings/changeTheme', payload: string }
  | { type: 'settings/changeFontSize', payload: number }
  | { type: 'settings/changeTabSize', payload: number }
  | { type: 'settings/toggleAutosave' }
  | { type: 'settings/toggleWrapLines' }
  | { type: 'settings/toggleShowGutter' }
  | { type: 'settings/toggleHighlightActiveLine' }
  | { type: 'settings/changeFirstVisit' }

export type IAction = ISnippetsAction | ISettingsAction

export interface IDictionary {
  [key: string]: string;
}