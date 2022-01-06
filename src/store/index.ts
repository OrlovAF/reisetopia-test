import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore, Store } from 'redux';
// import { useDispatch } from 'react-redux'
import { rootReducer } from './root.reducer';
import rootSaga from './root.saga';
import { IHotel } from '../types/hotels.types';

export interface AppState {
  hotels: IHotel[]
}

const configureStore = (): Store<AppState> => {
  const sagaMiddleware = createSagaMiddleware();
  const initialState = {};

  const store = createStore(rootReducer(), initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
};
const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store;
