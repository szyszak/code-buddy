import React, { useContext } from 'react';
// import styled from 'styled-components';
import { StoreContext } from '../store/Store';
import { IAction } from '../types';

// had to use 'optionsArr: any[]' because .map() can't call union types in TypeScript, ideally it would be 'string[] | number[]'
interface ICheckboxProps {
  label: string;
  isChecked: boolean;
  actionType: IAction['type'];
}

const Checkbox: React.FC<ICheckboxProps> = ({ label, isChecked, actionType }) => {
  const { dispatch } = useContext(StoreContext);

  const handleChange = (ev: any) => {
    dispatch({ type: actionType, payload: ev.currentTarget.value });
  };

  return (
    <label htmlFor={label}>
      {label}:
      <input type="checkbox" onChange={ev => handleChange(ev)} id={label} />
    </label>
  );
};

export default Checkbox;
