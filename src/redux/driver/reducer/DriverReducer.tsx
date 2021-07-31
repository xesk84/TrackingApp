export type Driver = {
  id: string;
  status: number;
  error: string;
};

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

const initialState: Driver = {
  id: '',
  status: 0,
  error: '',
};

export const driverReducer = (state = initialState, action: DriverActions) => {
  switch (action.type) {
    case DriverActionTypes.DRIVER_ACTION_REQUEST:
      console.log('fiquem a loading');
      return {...state, status: 1};
    case DriverActionTypes.DRIVER_ACTION_FETCH:
      console.log('fetchem driver');
      return {...state, id: action.payload.id, error: '', status: 2};
    case DriverActionTypes.DRIVER_ACTION_ERROR:
      return {id: '', error: action.error, status: 2};
    case DriverActionTypes.DRIVER_ACTION_LOGOUT:
      console.log('hola?');
      return {...initialState};
    default:
      return state;
  }
};
