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
    mockedPostDriver('/driver', id, password)
      .then(() => {
        console.log('tornem de la crida de driver');
        dispatch({
          type: DriverActionTypes.DRIVER_ACTION_FETCH,
          payload: {id: id},
        });
        AsyncStorage.setItem(STORAGE_KEY, id);
      })
      .catch(e => {
        console.log(e);
      });
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
