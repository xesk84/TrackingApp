import {Driver} from '../entities/DriverEntity';

export enum DriverActionTypes {
  DRIVER_ACTION_REQUEST = 'DRIVER_ACTION_REQUEST',
  DRIVER_ACTION_FETCH = 'DRIVER_ACTION_FETCH',
  DRIVER_ACTION_ERROR = 'DRIVER_ACTION_ERROR',
  DRIVER_ACTION_LOGOUT = 'DRIVER_ACTION_LOGOUT',
}

export type DriverRequest = {
  type: DriverActionTypes.DRIVER_ACTION_REQUEST;
};

export type DriverFetch = {
  type: DriverActionTypes.DRIVER_ACTION_FETCH;
  payload: Driver;
};

export type DriverError = {
  type: DriverActionTypes.DRIVER_ACTION_ERROR;
  error: string;
};

export type DriverLogout = {
  type: DriverActionTypes.DRIVER_ACTION_LOGOUT;
};

export type DriverActions =
  | DriverRequest
  | DriverFetch
  | DriverError
  | DriverLogout;
