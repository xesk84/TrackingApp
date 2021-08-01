import {Dispatch} from 'redux';
import {ActiveDeliveryActionTypes} from '../actions/ActiveDeliveryActions';
import {Delivery} from '../entitites/DeliveryEntity';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'ACTIVE_DELIVERY_KEY';

export const setActiveDelivery = (delivery: Delivery) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActiveDeliveryActionTypes.ACTIVE_DELIVERY_ACTIVATE,
      payload: delivery,
    });
    JSON.stringify(delivery);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(delivery));
  };
};

export const loadPersistedActiveDelivery = () => {
  return (dispatch: Dispatch) => {
    AsyncStorage.getItem(STORAGE_KEY).then(result => {
      if (result) {
        const persistedDelivery = JSON.parse(result);
        dispatch({
          type: ActiveDeliveryActionTypes.ACTIVE_DELIVERY_ACTIVATE,
          payload: persistedDelivery,
        });
      }
    });
  };
};

export const setActiveDeliveryDelivered = (delivery: Delivery) => {
  return (dispatch: Dispatch) => {
    //TODO: set status delivered
    //TODO: send to api
    setTimeout(() => {
      dispatch({
        type: ActiveDeliveryActionTypes.ACTIVE_DELIVERY_FINISH,
      });
    }, 1000);
    AsyncStorage.removeItem(STORAGE_KEY);
  };
};

export const setActiveDeliveryNotDelivered = (delivery: Delivery) => {
  return (dispatch: Dispatch) => {
    //TODO: set status undelivered
    //TODO: send to api
    setTimeout(() => {
      dispatch({
        type: ActiveDeliveryActionTypes.ACTIVE_DELIVERY_FINISH,
      });
    }, 1000);
    AsyncStorage.removeItem(STORAGE_KEY);
  };
};
