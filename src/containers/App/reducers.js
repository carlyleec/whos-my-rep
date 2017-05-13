import {
  ERROR_FOUND,
  DISMISS_ERROR_CLICKED,
  SELECTED_REP_TYPE,
  SELECTED_REP_STATE,
  REPS_FETCH_SUCCEEDED,
  REPS_FETCH_FAILED,
  TOGGLE_SHOW_DETAIL_CLICKED,
} from './constants';


const reps = [
  {
    name: 'Mike Coffman',
    party: 'Republican',
    state: 'CO',
    district: '6',
    phone: '202-225-7882',
    office: '2443 Rayburn HOB; Washington DC 20515-0606',
    link: 'http://coffman.house.gov',
  },
  {
    name: 'Diana DeGette',
    party: 'Democrat',
    state: 'CO',
    district: '1',
    phone: '202-225-4431',
    office: '2111 Rayburn HOB; Washington DC 20515-0601',
    link: 'http://degette.house.gov',
  },
  {
    name: 'Doug Lamborn',
    party: 'Republican',
    state: 'CO',
    district: '5',
    phone: '202-225-4422',
    office: '2402 Rayburn HOB; Washington DC 20515-0605',
    link: 'http://lamborn.house.gov',
  },
  {
    name: 'Ed Perlmutter',
    party: 'Democrat',
    state: 'CO',
    district: '7',
    phone: '202-225-2645',
    office: '1410 Longworth HOB; Washington DC 20515-0607',
    link: 'https://perlmutter.house.gov',
  },
  {
    name: 'Jared Polis',
    party: 'Democrat',
    state: 'CO',
    district: '2',
    phone: '202-225-2161',
    office: '1727 Longworth HOB; Washington DC 20515-0602',
    link: 'http://polis.house.gov',
  },
  {
    name: 'Scott Tipton',
    party: 'Republican',
    state: 'CO',
    district: '3',
    phone: '202-225-4761',
    office: '218 Cannon HOB; Washington DC 20515-0603',
    link: 'http://tipton.house.gov',
  },
  {
    name: 'Ken Buck',
    party: 'Republican',
    state: 'CO',
    district: '4',
    phone: '202-225-4676',
    office: '1130 Longworth HOB; Washington DC 20515-0604',
    link: 'https://buck.house.gov',
  },
];

const initialState = {
  repType: 'default',
  repState: 'default',
  errorMessage: '',
  showDetails: [],
  reps: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_FOUND:
      return Object.assign({}, state, {
        errorMessage: action.message,
      });
    case DISMISS_ERROR_CLICKED:
      return Object.assign({}, state, {
        errorMessage: '',
      });
    case SELECTED_REP_TYPE:
      return Object.assign({}, state, {
        repType: action.repType,
      });
    case SELECTED_REP_STATE:
      return Object.assign({}, state, {
        repState: action.repState,
      });
    case REPS_FETCH_SUCCEEDED:
      return Object.assign({}, state, {
        showDetails: [],
        reps: action.reps,
      });
    case REPS_FETCH_FAILED:
      return Object.assign({}, state, {
        errorMessage: action.message,
      });
    case TOGGLE_SHOW_DETAIL_CLICKED: {
      const showDetailIndex = state.showDetails.indexOf(action.detailIndex);
      if (showDetailIndex === -1) {
        return Object.assign({}, state, {
          showDetails: [...state.showDetails, action.detailIndex],
        });
      }
      return Object.assign({}, state, {
        showDetails: [
          ...state.showDetails.slice(0, showDetailIndex),
          ...state.showDetails.slice(showDetailIndex + 1)],
      });
    }
    default:
      return state;
  }
};

export default appReducer;
