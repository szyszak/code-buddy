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
`;

const CardWrapper = styled.div`
  width: 320px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  border: 1px #ffffff solid;
  color: #ffffff;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Language = styled.p`
  margin-top: 8px;
  font-size: 18px;
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
