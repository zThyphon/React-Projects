import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //Add store to provider function for using redux elements
  <Provider store={store}>
    <App />
  </Provider>
);

