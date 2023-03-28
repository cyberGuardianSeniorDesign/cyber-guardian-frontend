import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'react-wordsearch/dist/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import './index.css';
import registerServiceWorker from './components/Games/WordSearch/registerServiceWorker.js';
import reducer from './components/Games/WordSearch/reducers.js'

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));
