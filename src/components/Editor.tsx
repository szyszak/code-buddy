import React, { Dispatch } from 'react';
import AceEditor from 'react-ace';
import styled from 'styled-components';
import useTypedSelector from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { IAction } from '../types';
import 'ace-builds/webpack-resolver';

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

// STYLES
const Section = styled.section`
  grid-area: editor;
`;

const Header = styled.h2`
  margin-bottom: 10px;
  font-weight: normal;
`;

// COMPONENT
const Editor: React.FC = () => {
  const dispatch: Dispatch<IAction> = useDispatch();

  const settings = useTypedSelector(state => state.settings.editorSettings);

  const {
    theme,
    autoSave,
    fontSize,
    tabSize,
    wrapLines,
    showGutter,
    highlightActiveLine,
  } = settings;

  const currentSnippetData = useTypedSelector(state => state.settings.currentSnippet);

  const { title, language, value, id } = currentSnippetData;

  const handleChange = (currentValue: string) => {
    dispatch({ type: 'settings/updateCurrentSnippetValue', payload: currentValue });

    if (autoSave) {
      dispatch({ type: 'snippets/changeValue', payload: currentValue, id: id });
    }
  };

  return (
    <Section>
      <Header>snippet title: {title}</Header>

      <AceEditor
        width="100%"
        mode={language}
        theme={theme}
        value={value}
        name="code-editor"
        fontSize={fontSize}
        tabSize={tabSize}
        showGutter={showGutter}
        highlightActiveLine={highlightActiveLine}
        wrapEnabled={wrapLines}
        onChange={handleChange}
        debounceChangePeriod={500}
      />
    </Section>
  );
};

export default Editor;
