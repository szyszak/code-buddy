import React, { useContext } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import { StoreContext } from '../store/Store';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
  // tutaj handle change dla dropdownow i checkboxow podawane nizej jako prop?
  const { state } = useContext(StoreContext);
  const {
    dropdownOptions: { languages, themes, fontSizes, tabSizes }
  } = state;

  return (
    <Section>
      <button>ADD NEW</button>

      <Dropdown label="language" optionsArr={languages} actionType="settings/changeLanguage" />
      <Dropdown label="theme" optionsArr={themes} actionType="settings/changeTheme" />
      <Dropdown label="font size" optionsArr={fontSizes} actionType="settings/changeFontSize" />
      <Dropdown label="tab size" optionsArr={tabSizes} actionType="settings/changeTabSize" />
    </Section>
  );
};

export default Sidebar;
