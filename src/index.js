import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducers';
import App from './App.js';

console.log("+++++ index")
let store = createStore(todoApp,applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,    
    document.getElementById('root')
);
