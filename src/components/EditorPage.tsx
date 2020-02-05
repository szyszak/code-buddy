import React, { useEffect, Dispatch } from 'react';
import { useParams } from 'react-router-dom';
import useTypedSelector from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Editor from './Editor';
import { IAction, ISnippet } from '../types';

// STYLES
const Main = styled.main`
  display: grid;
  grid-auto-columns: 300px 1fr;
  grid-template-areas: 'sidebar editor';
`;

// COMPONENT
const EditorPage: React.FC = () => {
  const dispatch: Dispatch<IAction> = useDispatch();
  const snippets = useTypedSelector(state => state.snippets);
  const { id } = useParams();

  useEffect(() => {
    const currentSnippet = snippets.find(snippet => snippet.id === id) as ISnippet;

    dispatch({ type: 'settings/changeSnippet', payload: currentSnippet });
  }, [dispatch, id, snippets]);

  return (
    <Main>
      <Sidebar />
      <Editor />
    </Main>
  );
};

export default EditorPage;
