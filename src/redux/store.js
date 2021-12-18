import { applyMiddleware, createStore } from "redux";
import { mobileReducer } from "./reducers/mobile";
import createSagaMiddleware from "redux-saga";
import {watchUser} from './sagas/users.saga'

const sagaMiddleware=createSagaMiddleware();

const store = createStore(mobileReducer,applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(watchUser);