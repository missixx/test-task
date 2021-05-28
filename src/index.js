
import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router
} from "react-router-dom";

import './Styles/index.css';

import App from './App.js';

import reportWebVitals from './reportWebVitals';

import itemsReducer from './Reducers/ItemsReducer.js'
import inputReducer from './Reducers/InputReducer.js'
import selectByCategoryReducer from './Reducers/SelectByCategoryReducer.js'
import selectSortReducer from './Reducers/SelectSortReducer.js'
import busketReducer from './Reducers/busketReducer.js'


const rootReducer = combineReducers({
  items: itemsReducer,
  searchInputValue: inputReducer,
  selectedByCategoryValue: selectByCategoryReducer,
  selectSortValue: selectSortReducer,
  busketItems: busketReducer
})

const store = createStore(rootReducer)


ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
