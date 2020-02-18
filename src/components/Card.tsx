import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { languages } from '../store/dictionaries';

// TYPES
interface IProps {
  title: string;
  language: string;
  id: string;
}

// STYLES
const StyledLink = styled(Link)`
  text-decoration: none;
  border: 1px solid ${props => props.theme.fontColor};
`;

const CardWrapper = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.backgroundColor};
  text-align: center;
  color: ${props => props.theme.fontColor};
`;

const Title = styled.h3`
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
