import React, { useContext } from 'react';
// import styled from 'styled-components';
import { StoreContext } from '../store/Store';
import { IAction } from '../types';

interface ICheckboxProps {
  label: string;
  isChecked: boolean;
  actionType: IAction['type'];
}

const Checkbox: React.FC<ICheckboxProps> = ({ label, isChecked, actionType }) => {
  const { dispatch } = useContext(StoreContext);

  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => dispatch({ type: actionType } as IAction)}
      />
    </div>
  );
};

export default Checkbox;
