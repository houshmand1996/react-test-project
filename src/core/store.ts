
import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';


const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer, // root reducer with router state
  compose(
    applyMiddleware(...middlewares),
  ));

sagaMiddleware.run(rootSaga);


