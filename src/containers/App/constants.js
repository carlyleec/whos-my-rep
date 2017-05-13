// Action Types
export const SELECTED_REP_TYPE = 'whos_my_rep/App/SELECTED_REP_TYPE';
export const SELECTED_REP_STATE = 'whos_my_rep/App/SELECTED_REP_STATE';
export const CLICKED_FIND_MY_REPS = 'whos_my_rep/App/CLICKED_FIND_MY_REPS';
export const ERROR_FOUND = 'whos_my_rep/App/ERROR_FOUND';
export const DISMISS_ERROR_CLICKED = 'whos_my_rep/App/DISMISS_ERROR_CLICKED';
export const REPS_FETCH_REQUESTED = 'whos_my_rep/App/REPS_FETCH_REQUESTED';
export const REPS_FETCH_SUCCEEDED = 'whos_my_rep/App/REPS_FETCH_SUCCEEDED';
export const REPS_FETCH_FAILED = 'whos_my_rep/App/REPS_FETCH_FAILED';
export const TOGGLE_SHOW_DETAIL_CLICKED = 'whos_my_rep/App/TOGGLE_SHOW_DETAIL_CLICKED';
export const LOADING_STARTED = 'whos_my_rep/App/LOADING_STARTED';
export const LOADING_ENDED = 'whos_my_rep/App/LOADING_ENDED';

export const ERR_MESSAGE_FORM_INCOMPLETE = 'You need to select both a representative type and your state before we can find your reps.';

export const REP_TYPE_OPTIONS = [
  {
    label: 'Choose a representative type',
    value: 'default',
  },
  {
    label: 'Senators',
    value: 'senators',
  },
  {
    label: 'Representatives',
    value: 'representatives',
  },
];

export const STATE_OPTIONS = [
  {
    label: 'Choose a state',
    value: 'default',
  },
  {
    label: 'AL',
    value: 'AL',
  },
  {
    label: 'AK',
    value: 'AK',
  },
  {
    label: 'AZ',
    value: 'AZ',
  },
  {
    label: 'AR',
    value: 'AR',
  },
  {
    label: 'CA',
    value: 'CA',
  },
  {
    label: 'CO',
    value: 'CO',
  },
  {
    label: 'CT',
    value: 'CT',
  },
  {
    label: 'DE',
    value: 'DE',
  },
  {
    label: 'FL',
    value: 'FL',
  },
  {
    label: 'GA',
    value: 'GA',
  },
  {
    label: 'HI',
    value: 'HI',
  },
  {
    label: 'ID',
    value: 'ID',
  },
  {
    label: 'IL',
    value: 'IL',
  },
  {
    label: 'IN',
    value: 'IN',
  },
  {
    label: 'IA',
    value: 'IA',
  },
  {
    label: 'KS',
    value: 'KS',
  },
  {
    label: 'KY',
    value: 'KY',
  },
  {
    label: 'LA',
    value: 'LA',
  },
  {
    label: 'ME',
    value: 'ME',
  },
  {
    label: 'MD',
    value: 'MD',
  },
  {
    label: 'MA',
    value: 'MA',
  },
  {
    label: 'MI',
    value: 'MI',
  },
  {
    label: 'MN',
    value: 'MN',
  },
  {
    label: 'MS',
    value: 'MS',
  },
  {
    label: 'MO',
    value: 'MO',
  },
  {
    label: 'MT',
    value: 'MT',
  },
  {
    label: 'NE',
    value: 'NE',
  },
  {
    label: 'NV',
    value: 'NV',
  },
  {
    label: 'NH',
    value: 'NH',
  },
  {
    label: 'NJ',
    value: 'NJ',
  },
  {
    label: 'NM',
    value: 'NM',
  },
  {
    label: 'NY',
    value: 'NY',
  },
  {
    label: 'NC',
    value: 'NC',
  },
  {
    label: 'ND',
    value: 'ND',
  },
  {
    label: 'OH',
    value: 'OH',
  },
  {
    label: 'OK',
    value: 'OK',
  },
  {
    label: 'OR',
    value: 'OR',
  },
  {
    label: 'PA',
    value: 'PA',
  },
  {
    label: 'RI',
    value: 'RI',
  },
  {
    label: 'SC',
    value: 'SC',
  },
  {
    label: 'SD',
    value: 'SD',
  },
  {
    label: 'TN',
    value: 'TN',
  },
  {
    label: 'TX',
    value: 'TX',
  },
  {
    label: 'UT',
    value: 'UT',
  },
  {
    label: 'VT',
    value: 'VT',
  },
  {
    label: 'VA',
    value: 'VA',
  },
  {
    label: 'WA',
    value: 'WA',
  },
  {
    label: 'WV',
    value: 'WV',
  },
  {
    label: 'WI',
    value: 'WI',
  },
  {
    label: 'WY',
    value: 'WY',
  },
];
