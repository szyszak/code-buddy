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
    currentSnippetId: 'haha99',
    theme: 'monokai',
    autoSave: false,
    fontSize: 18,
    tabSize: 2,
    wrapLines: false,
    showGutter: true,
    highlightActiveLine: true
  },
  dropdownOptions: {
    languages: [
      'C/C++',
      'C#',
      'CSS',
      'Golang',
      'Haskell',
      'HTML',
      'Java',
      'JavaScript',
      'JSON',
      'JSX',
      'Lua',
      'PHP',
      'Python',
      'Ruby',
      'Rust',
      'Sass',
      'SCSS',
      'SQL',
      'TypeScript',
      'XML'
    ],
    themes: [
      'Cobalt',
      'Dracula',
      'GitHub',
      'Monokai',
      'Solarized Dark',
      'Solarized Light',
      'Tomorrow Night'
    ],
    fontSizes: [14, 16, 18, 20, 22, 24],
    tabSizes: [2, 4, 8]
  }
};

export default InitialState;
