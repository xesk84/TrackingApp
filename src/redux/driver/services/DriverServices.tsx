import {Dispatch} from 'redux';
import {DriverActionTypes} from '../actions/DriverActions';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'DRIVER_KEY';

export const loginDriver = (id: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DriverActionTypes.DRIVER_ACTION_REQUEST,
    });
    setTimeout(() => {
      dispatch({
        type: DriverActionTypes.DRIVER_ACTION_FETCH,
        payload: {id: id},
      });
      AsyncStorage.setItem(STORAGE_KEY, id);
    }, 1000);
  };
};

export const logoutDriver = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DriverActionTypes.DRIVER_ACTION_LOGOUT,
    });
    AsyncStorage.removeItem(STORAGE_KEY).catch(e => {
      console.log(`Imposible to logout ${e}`);
    });
  };
};

export const getPersistedDriver = () => {
  return (dispatch: Dispatch) => {
    console.log('****arranquem');
    dispatch({
      type: DriverActionTypes.DRIVER_ACTION_REQUEST,
    });
    AsyncStorage.getItem(STORAGE_KEY).then(result => {
      console.log('**** la persistencia', result);
      if (result) {
        console.log('tinc driver persistit', result);
        dispatch({
          type: DriverActionTypes.DRIVER_ACTION_FETCH,
          payload: {id: result},
        });
      } else {
        console.log('Sense driver persistit');
        dispatch({
          type: DriverActionTypes.DRIVER_ACTION_LOGOUT,
        });
      }
    });
  };
};
