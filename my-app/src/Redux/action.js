// action.js
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE } from './actionType';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (products) => ({
  type: FETCH_USERS_SUCCESS,
  payload: products,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});