import React, { useContext } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import Checkbox from './Checkbox';
import { StoreContext } from '../store/Store';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
  const { state } = useContext(StoreContext);

  const {
    dropdownOptions: { languages, themes, fontSizes, tabSizes },
  } = state;
  const {
    settings: { autoSave, wrapLines, showGutter, highlightActiveLine },
  } = state;

  return (
    <Section>
      <button>ADD NEW blue</button>
      <button>DELETE CURRENT red</button>
      <button>SAVE green</button>
      <Dropdown label="language" optionsArr={languages} actionType="settings/changeLanguage" />
      <Dropdown label="theme" optionsArr={themes} actionType="settings/changeTheme" />
      <Dropdown label="font size" optionsArr={fontSizes} actionType="settings/changeFontSize" />
      <Dropdown label="tab size" optionsArr={tabSizes} actionType="settings/changeTabSize" />
      <Checkbox label="autosave" isChecked={autoSave} actionType="settings/toggleAutosave" />
      <Checkbox label="wrap lines" isChecked={wrapLines} actionType="settings/toggleWrapLines" />
      <Checkbox label="show gutter" isChecked={showGutter} actionType="settings/toggleShowGutter" />
      <Checkbox label="highlight active line" isChecked={highlightActiveLine} actionType="settings/toggleHighlightActiveLine" />
    </Section>
  );
};

export default Sidebar;
