import React, { useContext } from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import styled from 'styled-components';
import { StoreContext } from './store/Store';

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
  const { state } = useContext(StoreContext);
  console.log(state);
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
