import React, { useEffect, Dispatch } from 'react';
import useTypedSelector from './hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import styled from 'styled-components';
import { IAction } from './types';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 40px;
  border: solid 2px black;
`;

const Header = styled.h1`
  text-align: center;
`;

const Main = styled.main`
  display: grid;
  grid-auto-columns: 300px 1fr;
  grid-template-areas: 'sidebar editor';
`;

const App: React.FC = () => {
  const snippets = useTypedSelector(state => state.snippets);
  const settings = useTypedSelector(state => state.settings);
  console.log(snippets, settings);
  const dispatch: Dispatch<IAction> = useDispatch();
  const isFirstVisit = window.localStorage.getItem('state') === null;
  const currentSnippetId = settings.editorSettings.currentSnippetId;

  useEffect(() => {
    if (isFirstVisit) {
      console.log('FIRST VISIT');
      const currentSnippet = snippets.find(snippet => snippet.id === 'demo');

      dispatch({ type: 'settings/changeSnippet', payload: currentSnippet! });
    } else if (snippets.length === 0) {
      console.log('NO SNIPPETS FOUND');
    } else {
      console.log('ANOTHER VISIT');
      const currentSnippet = snippets.find(snippet => snippet.id === currentSnippetId);

      dispatch({ type: 'settings/changeSnippet', payload: currentSnippet! });
    }
  }, [dispatch, isFirstVisit, snippets, currentSnippetId]);

  return (
    <Wrapper>
      <Header>Code Buddy</Header>
      <Main>
        <Sidebar />
        <Editor />
      </Main>
    </Wrapper>
  );
};

export default App;
