import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './polyfills';
import rootReducer from './store/reducers/rootReducer';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  return <Provider store={store}>{children}</Provider>;
};
