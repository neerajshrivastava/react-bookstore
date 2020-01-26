import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/css/index.css';
import './style/css/materialize.css';
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as serviceWorker from './serviceWorker';
const store = createStore(cartReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


