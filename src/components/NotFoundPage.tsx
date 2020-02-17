import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h2`
  font-size: 30px;
`;

const StyledLink = styled(Link)`
  margin-top: 30px;
  color: ${props => props.theme.fontColor};
  font-size: 26px;
`;

// COMPONENT
const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Code Buddy - Not found';
  });

  return (
    <Main>
      <Header>Error: Specified snippet was not found.</Header>
      <StyledLink to="/">Go back to home page.</StyledLink>
    </Main>
  );
};

export default NotFoundPage;
