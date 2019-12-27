import React, { useContext } from 'react';
import AceEditor from 'react-ace';
import { StoreContext } from '../store/Store';
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

const Editor = () => {
  const { state } = useContext(StoreContext);
  const {
    settings: {
      currentSnippetId,
      theme,
      // autoSave,
      fontSize,
      tabSize,
      wrapLines,
      showGutter,
      highlightActiveLine
    }
  } = state;

  const currentSnippetData = state.snippets.find(snippet => snippet.id === currentSnippetId);
  console.log(currentSnippetData);

  // @ts-ignore
  const { title, language, value } = currentSnippetData;

  return (
    <section>
      <AceEditor
        width="100%"
        focus={true}
        mode={language}
        theme={theme}
        value={value}
        name="code-editor" // musi byc unique?
        fontSize={fontSize}
        tabSize={tabSize}
        showGutter={showGutter}
        highlightActiveLine={highlightActiveLine}
        wrapEnabled={wrapLines}
        editorProps={{ $blockScrolling: true }}
        // setOptions={{ useWorker: false }}
      />
    </section>
  );
};

export default Editor;
