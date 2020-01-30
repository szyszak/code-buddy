import { ISnippetsState, ISettingsState } from '../types';

export const initialSnippetsState: ISnippetsState = [
  {
    title: 'Demo snippet',
    language: 'javascript',
    value: `console.log('Hello world!');`,
    id: 'demo',
  },
  {
    title: 'log stuff into console',
    language: 'javascript',
    value: 'console.log("HELLO WORLD");',
    id: 'lol123',
  },
  {
    title: 'make body color blue',
    language: 'css',
    value: `body {
        background-color: blue;
      }`,
    id: 'haha99',
  },
  {
    title: 'show a paragraph',
    language: 'html',
    value: "<p>what's up?</p>",
    id: 'hihi999',
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
    currentSnippetId: 'demo',
    theme: 'monokai',
    fontSize: 18,
    tabSize: 2,
    autoSave: true,
    wrapLines: true,
    showGutter: true,
    highlightActiveLine: true,
  },
};
