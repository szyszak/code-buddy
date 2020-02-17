import React, { useEffect, Dispatch } from 'react';
import { useParams } from 'react-router-dom';
import useTypedSelector from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Editor from './Editor';
import { IAction } from '../types';

// STYLES
const Main = styled.main`
  display: grid;
  grid-auto-columns: 200px 1fr;
  gap: 24px;
  grid-template-areas: 'sidebar editor';

  @media (max-width: 768px) {
    grid-template-areas:
      'editor'
      'sidebar';
    grid-auto-columns: 1fr;
  }
`;

// COMPONENT
const EditorPage: React.FC = () => {
  const dispatch: Dispatch<IAction> = useDispatch();
  const history = useHistory();
  const snippets = useTypedSelector(state => state.snippets);
  const { id } = useParams();

  useEffect(() => {
    const currentSnippet = snippets.find(snippet => snippet.id === id);

    if (currentSnippet === undefined) {
      return history.push('/notfound');
    }

    dispatch({ type: 'settings/changeSnippet', payload: currentSnippet });

    document.title = `Code Buddy - ${currentSnippet.title}`;
  }, [dispatch, history, id, snippets]);

  return (
    <Main>
      <Sidebar />
      <Editor />
    </Main>
  );
};

export default EditorPage;
