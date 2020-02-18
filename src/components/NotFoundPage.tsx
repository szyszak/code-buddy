import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// STYLES
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 26px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
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
