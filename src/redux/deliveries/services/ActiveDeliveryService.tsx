import {Dispatch} from 'redux';
import {ActiveDeliveryActionTypes} from '../actions/ActiveDeliveryActions';
import {Delivery} from '../entitites/DeliveryEntity';
import AsyncStorage from '@react-native-community/async-storage';
import {mockedPostDelivery} from '../../../common/services/ApiService';
import Geolocation from 'react-native-geolocation-service';
import {Alert} from 'react-native';

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
    Geolocation.getCurrentPosition(
      position => {
        mockedPostDelivery(
          '/finishDelivery',
          {
            ...delivery,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          'delivered',
        ).then(() => {
          dispatch({
            type: ActiveDeliveryActionTypes.ACTIVE_DELIVERY_FINISH,
          });
          AsyncStorage.removeItem(STORAGE_KEY);
        });
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
};

export const setActiveDeliveryNotDelivered = (delivery: Delivery) => {
  return (dispatch: Dispatch) => {
    //TODO: set status delivered
    //TODO: send to api
    Geolocation.getCurrentPosition(
      position => {
        mockedPostDelivery(
          '/finishDelivery',
          {
            ...delivery,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          'undelivered',
        ).then(() => {
          dispatch({
            type: ActiveDeliveryActionTypes.ACTIVE_DELIVERY_FINISH,
          });
          AsyncStorage.removeItem(STORAGE_KEY);
        });
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
};
