import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
//        ^ wraps window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import reducer from './bugs';

export default function configureStore() {
  return createStore(reducer, devToolsEnhancer({ trace: true }))
}