import { call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import { ERR_MESSAGE_FORM_INCOMPLETE, REPS_FETCH_REQUESTED } from './constants';
import { errorFound, repsFetchSucceded, repsFetchFailed } from './actions';

const fetchApi = endpont => (
  fetch(endpont).then(response => response.json())
);

/* Worker Generator */
function* fetchReps(action) {
  console.log(action);
  if (action.repType === 'default' || action.repState === 'default' || action.repType === undefined || action.repState === undefined) {
    yield put(errorFound(ERR_MESSAGE_FORM_INCOMPLETE));
  }

  try {
    const reps = yield call(fetchApi, `https://find-rep-api-express.herokuapp.com/${action.repType}/${action.repState}`);
    if (reps.success) {
      yield put(repsFetchSucceded(reps.results));
    } else {
      yield put(repsFetchFailed(reps.error));
    }
  } catch (e) {
    yield put(repsFetchFailed(e.message));
  }
}

/* Watcher Generator */
export default function* watchForRepsFetchRequested() {
  yield takeEvery(REPS_FETCH_REQUESTED, fetchReps);
}
