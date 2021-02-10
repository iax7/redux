// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
//          ^ wraps window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import { configureStore } from '@reduxjs/toolkit';
// ^ This replaces both imports from above
import reducer from './projects';

export default function() {
  return configureStore({ reducer })
}