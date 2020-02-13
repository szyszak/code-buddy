import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import nanoid from 'nanoid';
import styled from 'styled-components';
import { languages } from '../store/dictionaries';
import { ISnippet, IAction } from '../types';

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

interface IInputWrapperProps {
  gridArea: string;
}

interface IButtonProps {
  background: string;
  gridArea: string;
}

// STYLES
const style: Modal.Styles = {
  overlay: {
    padding: '20px',
    backgroundColor: 'rgba(23, 23, 23, 0.85)',
  },
  content: {
    maxWidth: '360px',
    width: '100%',
    margin: 'auto',
    marginTop: '120px',
    position: 'static',
    color: '#ffffff',
    border: '1px solid #ffffff',
    background: '#171717',
    borderRadius: '0px',
  },
};

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  grid-template-areas:
    'title-input language-input'
    'add-button cancel-button';

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'title-input'
      'language-input'
      'add-button'
      'cancel-button';
  }
`;

const InputWrapper = styled.div<IInputWrapperProps>`
  grid-area: ${props => props.gridArea};
`;

const Input = styled.input`
  width: 100%;
`;

const Select = styled.select`
  width: 100%;
`;

const Button = styled.button<IButtonProps>`
  grid-area: ${props => props.gridArea};
  padding: 10px 24px;
  background: ${props => props.background};
  border: 1px solid #ffffff;
  color: #ffffff;
  font-weight: bold;
`;

// COMPONENT
Modal.setAppElement('#root');

const AddSnippetModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const dispatch: Dispatch<IAction> = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('javascript');

  const optionsArr = Object.entries(languages);

  const optionList = optionsArr.map(([value, text], idx: number) => (
    <option key={idx} value={value}>
      {text}
    </option>
  ));

  const handleAddSnippet = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const id = nanoid(8);

    const newSnippet: ISnippet = {
      title,
      language,
      value: '',
      id,
    };

    dispatch({ type: 'snippets/add', payload: newSnippet });
    setIsOpen(false);
    history.push(`/${id}`);
  };

  const handleCloseModal = () => {
    setTitle('');
    setLanguage('javascript');
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal} style={style}>
      <Form onSubmit={ev => handleAddSnippet(ev)}>
        <InputWrapper gridArea="title-input">
          <label htmlFor="snippet-name">Title:</label>
          <Input
            type="text"
            id="snippet-name"
            value={title}
            onChange={ev => setTitle(ev.currentTarget.value)}
            required
            autoFocus
          />
        </InputWrapper>

        <InputWrapper gridArea="language-input">
          <label htmlFor="snippet-language">Language:</label>
          <Select
            id="snippet-language"
            value={language}
            onChange={ev => setLanguage(ev.currentTarget.value)}
            required
          >
            {optionList}
          </Select>
        </InputWrapper>

        <Button type="submit" background="green" gridArea="add-button">
          ADD
        </Button>

        <Button type="button" background="red" gridArea="cancel-button" onClick={handleCloseModal}>
          CANCEL
        </Button>
      </Form>
    </Modal>
  );
};

export default AddSnippetModal;
