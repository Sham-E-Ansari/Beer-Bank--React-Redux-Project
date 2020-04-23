import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_factory/root.reducer';

const loggerMiddleware = createLogger();

export const store = createStore(
   rootReducer,
   compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      ),
      //for redux devtool
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
   )
);
