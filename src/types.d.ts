export interface ISnippet {
  title: string;
  language: string;
  value: string;
  id: string;
}

export interface ISettings {
  theme: string;
  autoSave: boolean;
  fontSize: number;
  tabSize: number;
  wrapLines: boolean;
  showGutter: boolean;
  highlightActiveLine: boolean;
}

export type IState = {
  snippets: ISnippet[];
  settings: ISettings;
};

export type IAction =
  | { type: 'snippets/add', payload: string }
  | { type: 'snippets/remove', payload: number }

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}