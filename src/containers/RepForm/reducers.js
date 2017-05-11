import { SELECTED_REP_TYPE, SELECTED_REP_STATE } from './constants';

const initialState = {
  repType: undefined,
  repState: false,
  reps: [],
};

const markdownModal = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default markdownModal;
