import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { IAction, IDictionary } from '../types';

// TYPES
interface IDropdownProps {
  value: string | number;
  id?: string;
  label: string;
  options: IDictionary;
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
const Dropdown: React.FC<IDropdownProps> = ({ value, id, label, options, actionType }) => {
  const dispatch = useDispatch();

  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: actionType, payload: ev.currentTarget.value, id: id });
  };

  const optionsArr = Object.entries(options);

  const optionList = optionsArr.map(([value, text], idx: number) => (
    <option key={idx} value={value}>
      {text}
    </option>
  ));

  return (
    <Wrapper>
      <Label htmlFor={label}>{label}:</Label>

      <select value={value} id={label} onChange={ev => handleChange(ev)}>
        {optionList}
      </select>
    </Wrapper>
  );
};

export default Dropdown;
