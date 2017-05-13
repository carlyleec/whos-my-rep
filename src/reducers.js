import { combineReducers } from 'redux';

// Import Reducers
import appReducer from './containers/App/reducers';


const reducers = combineReducers({ appReducer });

export default reducers;
