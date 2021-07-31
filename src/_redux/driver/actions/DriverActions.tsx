import {DriverActionTypes} from '../actionTypes/DriverActionTypes';
import {
  DriverError,
  DriverErrorPayload,
  DriverRequest,
  DriverFetch,
  DriverFetchPayload,
} from '../types/types';

export const driverRequest = (): DriverRequest => ({
  type: DriverActionTypes.DRIVER_REQUEST,
});

export const driverFetch = (payload: DriverFetchPayload): DriverFetch => ({
  type: DriverActionTypes.DRIVER_FETCH,
  payload,
});

export const driverError = (payload: DriverErrorPayload): DriverError => ({
  type: DriverActionTypes.DRIVER_ERROR,
  payload,
});
