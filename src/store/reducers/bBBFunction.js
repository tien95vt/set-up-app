import * as actionType from '../actions/actionTypes';

const initState = {
  b1: 5,
  b2: 10
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.HANDLE_BBB111: // b1 + count
      return {
        ...state,
        b1: state.b1 + action.count
      };
    case actionType.HANDLE_BBB222:
      return state;
    default:
      return state;
  }
};

export default reducer;