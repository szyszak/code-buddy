import { useSelector, TypedUseSelectorHook } from 'react-redux';
import rootReducer from '../store/reducers/rootReducer';

type IRootState = ReturnType<typeof rootReducer>;

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
