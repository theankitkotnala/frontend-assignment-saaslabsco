import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './../reducers';
import sagas from '../sagas/percentageFunded';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(sagaMiddleware)
);

export default store;
sagaMiddleware.run(sagas);

