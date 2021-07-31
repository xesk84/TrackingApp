import {DriverActionTypes} from '../actionTypes/DriverActionTypes';

export type DriverFetchPayload = {
  id: string;
};

export type DriverErrorPayload = {
  id: string;
  error: string;
};

export interface DriverRequest {
  type: DriverActionTypes.DRIVER_REQUEST;
}

export type DriverFetch = {
  type: DriverActionTypes.DRIVER_FETCH;
  payload: DriverFetchPayload;
};

export type DriverError = {
  type: DriverActionTypes.DRIVER_ERROR;
  payload: DriverErrorPayload;
};

export type DriverActions = DriverRequest | DriverFetch | FetchPostsFailure;
