import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { languages } from '../store/dictionaries';

interface IProps {
  title: string;
  language: string;
  id: string;
}

// STYLES
const StyledLink = styled(Link)`
  text-decoration: none;
  border: 1px #ffffff solid;
`;

const CardWrapper = styled.div`
  padding: 20px;
  text-align: center;
  color: #ffffff;
`;

const Title = styled.h2`
  font-size: 18px;
`;

const Language = styled.p`
  margin-top: 8px;
  font-size: 16px;
`;

// COMPONENT
const Card: React.FC<IProps> = ({ id, title, language }) => (
  <StyledLink to={`/${id}`}>
    <CardWrapper>
      <Title>title: {title}</Title>
      <Language>language: {languages[language]}</Language>
    </CardWrapper>
  </StyledLink>
);

export default Card;
