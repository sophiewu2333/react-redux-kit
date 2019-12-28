import App from './src/containers/App';
import ReactDom from 'react-dom';
import React from 'react';
import store from './src/modules/entry/store';
import { Provider } from 'react-redux';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
