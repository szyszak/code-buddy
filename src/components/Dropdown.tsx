import React, { useContext } from 'react';
// import styled from 'styled-components';
import { StoreContext } from '../store/Store';
import { IAction } from '../types';

// had to use 'optionsArr: any[]' because .map() can't call union types in TypeScript, ideally it would be 'string[] | number[]'
interface IDropdownProps {
  label: string;
  optionsArr: any[];
  actionType: IAction['type'];
}

const Dropdown: React.FC<IDropdownProps> = ({ label, optionsArr, actionType }) => {
  const { dispatch } = useContext(StoreContext);

  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: actionType, payload: ev.currentTarget.value } as IAction);
  };

  const options = optionsArr.map((option: string, idx: number) => (
    <option key={idx}>{option}</option>
  ));

  return (
    <label htmlFor={label}>
      {label}:
      <select onChange={ev => handleChange(ev)} id={label}>
        {options}
      </select>
    </label>
  );
};

export default Dropdown;
