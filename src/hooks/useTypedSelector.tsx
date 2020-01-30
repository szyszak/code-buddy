import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { IRootState } from '../types';

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
