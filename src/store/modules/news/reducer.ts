import produce from 'immer';
import types from './types';

const INITIAL_STATE = {
  list: [],
  featured: null,
  details: null,
};

const reducer: any = (baseState: any = INITIAL_STATE, action: any) => {
  return produce(baseState, (draftState: any) => {
    switch (action.type) {
      case types.REDUCER_SET_STATE: {
        Object.keys(action.payload.reducerState).forEach(objectKey => {
          draftState[objectKey] = action.payload.reducerState[objectKey];
        });
        break;
      }
      default:
    }
  });
};

export default reducer;
