import React, { Dispatch } from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { languages, themes, fontSizes, tabSizes } from '../store/dictionaries';
import Dropdown from './Dropdown';
import Checkbox from './Checkbox';
import styled from 'styled-components';
import { IAction } from '../types';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Sidebar: React.FC = () => {
  const dispatch: Dispatch<IAction> = useDispatch();

  const settings = useTypedSelector(state => state.settings);

  const {
    theme,
    fontSize,
    tabSize,
    autoSave,
    wrapLines,
    showGutter,
    highlightActiveLine,
  } = settings.editorSettings;

  const { language, id } = settings.currentSnippet;

  return (
    <Section>
      <button>ADD NEW blue</button>

      <button onClick={() => dispatch({ type: 'snippets/remove', payload: id })}>
        DELETE CURRENT red
      </button>
      <button
        onClick={() =>
          // PROBABLY WON'T WORK
          dispatch({ type: 'snippets/changeValue', payload: settings.currentSnippet.value, id: id })
        }
      >
        SAVE green
      </button>
      <button style={{ padding: '16px' }} onClick={() => window.localStorage.clear()}>
        CLEAR LOCAL STORAGE
      </button>
      <Dropdown
        value={language}
        id={id}
        label="language"
        options={languages}
        actionType="snippets/changeLanguage"
      />
      <Dropdown value={theme} label="theme" options={themes} actionType="settings/changeTheme" />
      <Dropdown
        value={fontSize}
        label="font size"
        options={fontSizes}
        actionType="settings/changeFontSize"
      />
      <Dropdown
        value={tabSize}
        label="tab size"
        options={tabSizes}
        actionType="settings/changeTabSize"
      />
      <Checkbox label="autosave" isChecked={autoSave} actionType="settings/toggleAutosave" />
      <Checkbox label="wrap lines" isChecked={wrapLines} actionType="settings/toggleWrapLines" />
      <Checkbox label="show gutter" isChecked={showGutter} actionType="settings/toggleShowGutter" />
      <Checkbox
        label="highlight active line"
        isChecked={highlightActiveLine}
        actionType="settings/toggleHighlightActiveLine"
      />
    </Section>
  );
};

export default Sidebar;
