import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
//        ^ wraps window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import reducer from './reducer';

const store = createStore(
  reducer,
  devToolsEnhancer({ trace: true })
);

export default store;