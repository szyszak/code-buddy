import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { IAction } from '../types';

// TYPES
interface ICheckboxProps {
  label: string;
  isChecked: boolean;
  actionType: IAction['type'];
}

// STYLES
const Wrapper = styled.div`
  margin: 2px 0;
  color: ${props => props.theme.fontColor};
`;

const Label = styled.label`
  margin-right: 6px;
`;

// COMPONENT
const Checkbox: React.FC<ICheckboxProps> = ({ label, isChecked, actionType }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Label htmlFor={label}>{label}:</Label>
      <input
        type="checkbox"
        id={label}
        checked={isChecked}
        onChange={() => dispatch({ type: actionType })}
      />
    </Wrapper>
  );
};

export default Checkbox;
