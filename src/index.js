import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.js';
import 'react-wordsearch/dist/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './components/Games/WordSearch/registerServiceWorker.js';
import reducer from './components/Games/WordSearch/reducers.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';

let store = createStore(reducer);

const root = createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
         <Provider store={store}>
            <App />
         </Provider>
   </React.StrictMode>
);

// ReactDOM.render(
//     <Provider store={store}>
//     <App />
//     </Provider>,
//     document.getElementById('root'));


//registerServiceWorker();