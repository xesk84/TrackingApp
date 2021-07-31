import {DriverActionTypes} from '../reducer/DriverReducer';

export const loginDriver = (id: string, password: string) => {
  return dispatch => {
    dispatch({
      type: DriverActionTypes.DRIVER_ACTION_REQUEST,
    });
    dispatch({
      type: DriverActionTypes.DRIVER_ACTION_FETCH,
      payload: {id: id},
    });
  };
};

export const logoutDriver = () => {
  console.log('lets logout');
  return dispatch => {
    dispatch({
      type: DriverActionTypes.DRIVER_ACTION_LOGOUT,
    });
  };
};
