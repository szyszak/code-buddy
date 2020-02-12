import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import nanoid from 'nanoid';
// import styled from 'styled-components';
import { languages } from '../store/dictionaries';
import { ISnippet, IAction } from '../types';

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
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
      <form onSubmit={ev => handleAddSnippet(ev)}>
        <label htmlFor="snippet-name">
          Title:
          <input
            type="text"
            id="snippet-name"
            value={title}
            onChange={ev => setTitle(ev.currentTarget.value)}
            required
          />
        </label>

        <label htmlFor="snippet-language">
          Language:
          <select
            id="snippet-language"
            value={language}
            onChange={ev => setLanguage(ev.currentTarget.value)}
          >
            {optionList}
          </select>
        </label>

        <button type="submit">ADD</button>

        <button type="button" onClick={handleCloseModal}>
          CANCEL
        </button>
      </form>
    </Modal>
  );
};

export default AddSnippetModal;