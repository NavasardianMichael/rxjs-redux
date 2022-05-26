import React from 'react';
import ReactDOM from 'react-dom/client';
import { combineReducers } from './redux-rxjs/core/combineReducers';
import { createStore } from './redux-rxjs/core/createStore';
import Provider from './redux-rxjs/core/Provider';

import { reducer } from './store/reducer';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = createStore(combineReducers({
  counter: reducer
}))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)