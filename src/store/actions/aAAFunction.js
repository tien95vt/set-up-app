import * as actionTypes  from './actionTypes';
import axios from '../../axios';

export const handleAAA111 = () => {
  return {
    type: actionTypes.HANDLE_AAA111
  }
};

export const handleAAA222 = () => {
  return {
    type: actionTypes.HANDLE_AAA222
  }
};

export const getUserStart = () => {
  return {
    type: actionTypes.GET_USER_START
  }
};

export const getUserSuccess = (data) => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    data
  }
};

export const getUserFail = (err) => {
  return {
    type: actionTypes.GET_USER_FAIL,
    err
  }
};

export const getUser = () => {
  return dispatch => {
    dispatch(getUserStart());
    axios.get('/users')
      .then(response => {
        dispatch(getUserSuccess(response.data))
      })
      .catch((err) => dispatch(getUserFail(err)));
  };
};
