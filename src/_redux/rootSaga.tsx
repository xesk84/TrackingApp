import {all, fork} from 'redux-saga/effects';
import {getDriverSaga} from './driver/sagas/DriverSaga';

export function* rootSaga() {
  yield all([fork(getDriverSaga)]);
}
