import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useTypedSelector from '../hooks/useTypedSelector';
import { languages } from '../store/dictionaries';

// STYLES
const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Card = styled.div`
  margin: 10px;
  padding: 20px;
  border: 1px #ffffff solid;
  color: #ffffff;
`;

const Title = styled.h2``;

const Language = styled.p``;

// COMPONENT
const StartPage: React.FC = () => {
  const snippets = useTypedSelector(state => state.snippets);

  const links = snippets.map(snippet => (
    <StyledLink to={`/${snippet.id}`} key={snippet.id}>
      <Card>
        <Title>title: {snippet.title}</Title>
        <Language>language: {languages[snippet.language]}</Language>
      </Card>
    </StyledLink>
  ));

  return <Main>{links}</Main>;
};

export default StartPage;
