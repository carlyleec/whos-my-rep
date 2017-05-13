import {
  ERROR_FOUND,
  DISMISS_ERROR_CLICKED,
  SELECTED_REP_TYPE,
  SELECTED_REP_STATE,
  REPS_FETCH_REQUESTED,
  REPS_FETCH_SUCCEEDED,
  REPS_FETCH_FAILED,
  TOGGLE_SHOW_DETAIL_CLICKED,
} from './constants';

export const errorFound = message => ({
  type: ERROR_FOUND,
  message,
});

export const dismissErrorClicked = () => ({
  type: DISMISS_ERROR_CLICKED,
});

export const selectedRepType = repType => ({
  type: SELECTED_REP_TYPE,
  repType,
});

export const selectedRepState = repState => ({
  type: SELECTED_REP_STATE,
  repState,
});

export const repsFetchRequested = (repType, repState) => ({
  type: REPS_FETCH_REQUESTED,
  repType,
  repState,
});

export const repsFetchSucceded = reps => ({
  type: REPS_FETCH_SUCCEEDED,
  reps,
});

export const repsFetchFailed = message => ({
  type: REPS_FETCH_FAILED,
  message,
});

export const toggleShowDetailClicked = detailIndex => ({
  type: TOGGLE_SHOW_DETAIL_CLICKED,
  detailIndex,
});
