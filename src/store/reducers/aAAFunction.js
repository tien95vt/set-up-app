import * as actionTypes from '../actions/actionTypes';

const initState = {
  a1: 1,
  a2: 2,
  data: null,
  err: false,
  loading: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_AAA111: // a1 + 10
      return {
        ...state,
        a1: state.a1 + 10
      };
    case actionTypes.HANDLE_AAA222: // a2 - 10
      return {
        ...state,
        a2: state.a2 - 10
      };
    case actionTypes.GET_USER_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    case actionTypes.GET_USER_FAIL:
      return {
        ...state,
        err: true
      };
    default:
      return state;
  }
};

export default reducer;