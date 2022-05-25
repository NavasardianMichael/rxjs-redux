import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from './redux/core/createStore';
import Provider from './redux/core/Provider';
import { reducer } from './store/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

