import {Dispatch} from 'redux';
import {ActiveDeliveryActionTypes} from '../actions/ActiveDeliveryActions';
import {Delivery} from '../entitites/DeliveryEntity';

export const setActiveDelivery = (delivery: Delivery) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActiveDeliveryActionTypes.ACTIVE_DELIVERY_ACTIVATE,
      payload: delivery,
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
  };
};
