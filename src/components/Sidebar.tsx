import React, { Dispatch } from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { languages, themes, fontSizes, tabSizes } from '../store/dictionaries';
import Dropdown from './Dropdown';
import Checkbox from './Checkbox';
import styled from 'styled-components';
import { IAction } from '../types';

interface IButtonProps {
  background: string;
}

// STYLES
const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button<IButtonProps>`
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${props => props.background};
  border: 1px solid #ffffff;
  font-weight: bold;
  text-transform: uppercase;
`;

// COMPONENT
const Sidebar: React.FC = () => {
  const dispatch: Dispatch<IAction> = useDispatch();

  const settings = useTypedSelector(state => state.settings);

  const history = useHistory();

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

  const handleRemoveSnippet = (id: string) => {
    history.push('/');
    dispatch({ type: 'snippets/remove', payload: id });
  };

  return (
    <Section>
      <Button background="#0093e9" onClick={() => history.push('/')}>
        go back
      </Button>

      <Button
        background="#31c800"
        onClick={() =>
          dispatch({ type: 'snippets/changeValue', payload: settings.currentSnippet.value, id: id })
        }
      >
        save snippet
      </Button>
      <Button background="#f70000" onClick={() => handleRemoveSnippet(id)}>
        delete snippet
      </Button>
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
