import React from 'react';
// import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { IAction } from '../types';

interface ICheckboxProps {
  label: string;
  isChecked: boolean;
  actionType: IAction['type'];
}

const Checkbox: React.FC<ICheckboxProps> = ({ label, isChecked, actionType }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input
        type="checkbox"
        id={label}
        checked={isChecked}
        onChange={() => dispatch({ type: actionType })}
      />
    </div>
  );
};

export default Checkbox;
