import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

// Import Redux Store
import configureStore from './configureStore';


// Import styles
require('./styles/styles.css');


const store = configureStore();


render(<App store={store} />, document.getElementById('app'));
