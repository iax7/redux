// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
//          ^ wraps window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import { configureStore } from '@reduxjs/toolkit';
// ^ This replaces both imports from above
import reducer from './reducer';
import logger from './middleware/logger'

export default function() {
  return configureStore({
    reducer,
    middleware: [logger]
  })
}