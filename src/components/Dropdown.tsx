import React from 'react';
import { useDispatch } from 'react-redux';
import { IAction, IDictionary } from '../types';
// import styled from 'styled-components';

interface IDropdownProps {
  value: string | number;
  id?: string;
  label: string;
  options: IDictionary;
  actionType: IAction['type'];
}

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
    <label htmlFor={label}>
      {label}:
      <select value={value} id={label} onChange={ev => handleChange(ev)}>
        {optionList}
      </select>
    </label>
  );
};

export default Dropdown;
