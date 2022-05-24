import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Provider from './redux/core/Provider';
import { createStore } from './redux/core/store';
import { reducer } from './store/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer)
console.log({store});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

