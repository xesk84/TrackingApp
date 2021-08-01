import {Dispatch} from 'redux';
import {DriverActionTypes} from '../actions/DriverActions';
import AsyncStorage from '@react-native-community/async-storage';
import {mockedPostDriver} from '../../../common/services/ApiService';

const STORAGE_KEY = 'DRIVER_KEY';

export const loginDriver = (id: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DriverActionTypes.DRIVER_ACTION_REQUEST,
    });
    mockedPostDriver('/driver', id, password).then(() => {
      dispatch({
        type: DriverActionTypes.DRIVER_ACTION_FETCH,
        payload: {id: id},
      });
      AsyncStorage.setItem(STORAGE_KEY, id);
    });
  };
};

export const logoutDriver = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DriverActionTypes.DRIVER_ACTION_LOGOUT,
    });
    AsyncStorage.removeItem(STORAGE_KEY);
  };
};

export const getPersistedDriver = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DriverActionTypes.DRIVER_ACTION_REQUEST,
    });
    AsyncStorage.getItem(STORAGE_KEY).then(result => {
      if (result) {
        dispatch({
          type: DriverActionTypes.DRIVER_ACTION_FETCH,
          payload: {id: result},
        });
      } else {
        dispatch({
          type: DriverActionTypes.DRIVER_ACTION_LOGOUT,
        });
      }
    });
  };
};
