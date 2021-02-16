// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
//          ^ wraps window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// ^ This replaces both imports from above
import reducer from './reducer';
import logger from './middleware/logger'
import toast from './middleware/toast';
import api from './middleware/api'

export default function() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(), // Thunk is included here by default
      // logger({ destination: 'console' }), // extra user middleware
      toast,
      api
    ]
  })
}