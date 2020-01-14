import React from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
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
  const { autoSave, wrapLines, showGutter, highlightActiveLine } = settings.editorSettings;
  const { languages, themes, fontSizes, tabSizes } = settings.dropdownOptions;

  return (
    <Section>
      <button>ADD NEW blue</button>
      <button>DELETE CURRENT red</button>
      <button>SAVE green</button>
      <Dropdown label="language" optionsArr={languages} actionType="snippets/update" />
      <Dropdown label="theme" optionsArr={themes} actionType="settings/changeTheme" />
      <Dropdown label="font size" optionsArr={fontSizes} actionType="settings/changeFontSize" />
      <Dropdown label="tab size" optionsArr={tabSizes} actionType="settings/changeTabSize" />
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
