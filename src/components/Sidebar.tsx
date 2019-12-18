import React, { useContext } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import { StoreContext } from '../store/Store';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { dropdownOptions } = state;

  return (
    <Section>
      <button>ADD NEW</button>

      <Dropdown
        label="language"
        optionsArr={dropdownOptions.languages}
        actionType="settings/changeLanguage"
      />
      {/* <Dropdown label="theme" optionsArr={dropdownOptions.themes} /> */}
    </Section>
  );
};

export default Sidebar;
