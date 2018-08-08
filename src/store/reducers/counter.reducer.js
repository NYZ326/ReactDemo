// EXAMPLE REDUCER
import {
  INCREASE,
  DECREASE
} from '../constants/counter.constant';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { 
        ...state,
        count: state.count + 1,
      };
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}