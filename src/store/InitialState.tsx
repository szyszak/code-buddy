import { IState } from '../types';

const InitialState: IState = {
  snippets: [
    {
      title: 'log stuff into console',
      language: 'javascript',
      value: 'console.log("HELLO WORLD");',
      id: 'lol123'
    },
    {
      title: 'make body color blue',
      language: 'css',
      value: `body {
        background-color: blue;
      }`,
      id: 'haha99'
    },
    {
      title: 'show a paragraph',
      language: 'html',
      value: "<p>what's up?</p>",
      id: 'hihi999'
    }
  ],
  settings: {
    theme: 'monokai',
    autoSave: true,
    fontSize: 18,
    tabSize: 2,
    wrapLines: true,
    showGutter: true,
    highlightActiveLine: true
  }
};

export default InitialState;
