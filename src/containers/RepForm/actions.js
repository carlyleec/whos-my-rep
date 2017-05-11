import { SELECTED_REP_TYPE, SELECTED_REP_STATE } from './constants';

export const selectRepType = repType => ({
type: OPEN_MARKDOWN_MODAL,
repType,
});

export const selectRepState = repState => ({
type: CLOSE_MARKDOWN_MODAL,
repState
});
