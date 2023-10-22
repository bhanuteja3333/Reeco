
import {
  fetchUsersSuccess,
  fetchUsersFailure
} from './action';

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE} from './actionType';

import { takeLatest, call, put,all,fork } from 'redux-saga/effects';
import axios from 'axios'; // You need to have Axios or another HTTP library installed

function* fetchUsers() {
  try {
    // Make an API call using Axios or your HTTP library of choice
    const response = yield call(axios.get, 'http://localhost:5000/api/users');
    // Dispatch a success action with the received data
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    // Dispatch a failure action if there's an error
    yield put(fetchUsersFailure(error));
  }
}

function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

function* rootSaga() {
  yield all([fork(watchFetchUsers)]);
}
export default rootSaga;


