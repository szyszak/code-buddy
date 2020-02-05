import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import EditorPage from './components/EditorPage';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 40px;
`;

const Header = styled.h1`
  text-align: center;
`;

// COMPONENT
const App: React.FC = () => {
  return (
    <Wrapper>
      <Header>Code Buddy</Header>
      <button style={{ padding: '16px' }} onClick={() => window.localStorage.clear()}>
        CLEAR LOCAL STORAGE
      </button>
      <Router>
        <Switch>
          <Route path="/:id">
            <EditorPage />
          </Route>
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;
