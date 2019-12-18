import React, { useContext } from 'react';
// import styled from 'styled-components';
import { StoreContext } from '../store/Store';
import { IAction } from '../types';

interface IDropdownProps {
  label: string;
  optionsArr: string[];
  actionType: any; // wykumac co zrobic zeby nie rzucalo bledami
}

const Dropdown: React.FC<IDropdownProps> = ({ label, optionsArr, actionType }) => {
  const { dispatch } = useContext(StoreContext);

  const options = optionsArr.map((option, idx) => <option key={idx}>{option}</option>);

  return (
    <label htmlFor={label}>
      {label}:
      <select
        onChange={ev => dispatch({ type: actionType, payload: ev.currentTarget.value })}
        id={label}
      >
        {options}
      </select>
    </label>
  );
};

export default Dropdown;
