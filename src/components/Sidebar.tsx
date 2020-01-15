import React from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import { languages, themes, fontSizes, tabSizes } from '../store/dictionaries';
import Dropdown from './Dropdown';
import Checkbox from './Checkbox';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Sidebar: React.FC = () => {
  const settings = useTypedSelector(state => state.settings);
  // console.log(settings);
  const {
    theme,
    fontSize,
    tabSize,
    autoSave,
    wrapLines,
    showGutter,
    highlightActiveLine,
  } = settings.editorSettings;

  // const { languages, themes, fontSizes, tabSizes } = settings.dropdownOptions;

  const { language, id } = settings.currentSnippet;

  return (
    <Section>
      <button>ADD NEW blue</button>
      <button>DELETE CURRENT red</button>
      <button>SAVE green</button>
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
