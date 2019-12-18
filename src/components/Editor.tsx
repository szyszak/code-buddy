import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
// EXTENSIONS?

// LANGUAGES
import 'ace-builds/src-min-noconflict/mode-c_cpp';
import 'ace-builds/src-min-noconflict/mode-csharp';
import 'ace-builds/src-min-noconflict/mode-css';
import 'ace-builds/src-min-noconflict/mode-golang';
import 'ace-builds/src-min-noconflict/mode-haskell';
import 'ace-builds/src-min-noconflict/mode-html';
import 'ace-builds/src-min-noconflict/mode-java';
import 'ace-builds/src-min-noconflict/mode-javascript';
import 'ace-builds/src-min-noconflict/mode-json';
import 'ace-builds/src-min-noconflict/mode-jsx';
import 'ace-builds/src-min-noconflict/mode-lua';
import 'ace-builds/src-min-noconflict/mode-php';
import 'ace-builds/src-min-noconflict/mode-python';
import 'ace-builds/src-min-noconflict/mode-ruby';
import 'ace-builds/src-min-noconflict/mode-rust';
import 'ace-builds/src-min-noconflict/mode-sass';
import 'ace-builds/src-min-noconflict/mode-scss';
import 'ace-builds/src-min-noconflict/mode-sql';
import 'ace-builds/src-min-noconflict/mode-typescript';
import 'ace-builds/src-min-noconflict/mode-xml';

// THEMES
import 'ace-builds/src-min-noconflict/theme-cobalt';
import 'ace-builds/src-min-noconflict/theme-dracula';
import 'ace-builds/src-min-noconflict/theme-github';
import 'ace-builds/src-min-noconflict/theme-monokai';
import 'ace-builds/src-min-noconflict/theme-solarized_dark';
import 'ace-builds/src-min-noconflict/theme-solarized_light';
import 'ace-builds/src-min-noconflict/theme-tomorrow_night';

const Editor = () => (
  <section>
    <AceEditor
      width="100%"
      mode="javascript"
      theme="dracula"
      value="console.log('whut')"
      name="code-editor" // musi byc unique?
      fontSize={16}
      tabSize={2}
      editorProps={{ $blockScrolling: true }}
      // setOptions={{ useWorker: false }}
    />
  </section>
);

export default Editor;
