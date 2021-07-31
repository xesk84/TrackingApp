import axios, {AxiosResponse} from 'axios';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Driver} from '../entities/Driver';
import {
  driverFetch,
  driverRequest,
  driverError,
} from '../actions/DriverActions';
import {DriverActionTypes} from '../actionTypes/DriverActionTypes';
import {StatusEnum} from '../../../common/enums/StatusEnum';
import {DriverRequest} from '../types/types';

const getDriver = async (id: string, password: string) => {
  //CALL TO MOCKED API
  // return await axios.get<Driver>(
  //   `https://60e84194673e350017c21844/api/getDriver?id=${id}&password=${password}`,
  // );
  return {data: id, status: 200, statusText: 'OK', headers: {}, config: {}};
};

export function* getDriverSaga(id: string, password: string) {
  console.log('nada?');
  try {
    console.log('comença la saga');
    yield put(driverRequest());
    console.log('driver a loading');
    const response = yield call(getDriver(id, password));
    console.log('tenim driver', response);
    yield put(
      driverFetch({
        id: response.data,
      }),
    );
  } catch (e) {
    yield put(
      driverError({
        error: e.message,
        id,
      }),
    );
  }
}

// function* postsSaga() {
//   yield all([takeLatest(DriverAc.FETCH_POST_REQUEST, fetchPostsSaga)]);
// }

type DriverResponse = {
  id: string;
};
