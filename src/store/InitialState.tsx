import { ISnippetsState, ISettingsState } from '../types';

export const initialSnippetsState: ISnippetsState = [
  {
    title: 'Demo snippet',
    language: 'javascript',
    value: `console.log('Hello world!');`,
    id: 'demo',
  },
];

export const initialSettingsState: ISettingsState = {
  currentSnippet: {
    title: '',
    language: '',
    value: '',
    id: '',
  },
  editorSettings: {
    theme: 'monokai',
    fontSize: 18,
    tabSize: 2,
    autoSave: true,
    wrapLines: true,
    showGutter: true,
    highlightActiveLine: true,
  },
};
