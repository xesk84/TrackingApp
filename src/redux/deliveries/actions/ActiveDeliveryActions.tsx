import {Delivery, DeliveryFinish} from '../entitites/DeliveryEntity';

export enum ActiveDeliveryActionTypes {
  ACTIVE_DELIVERY_ACTIVATE = 'ACTIVE_DELIVERY_ACTIVATE',
  ACTIVE_DELIVERY_FINISH = 'ACTIVE_DELIVERY_FINISH',
  ACTIVE_DELIVERY_ERROR = 'ACTIVE_DELIVERY_ERROR',
}

export type ActiveDeliveryActive = {
  type: ActiveDeliveryActionTypes.ACTIVE_DELIVERY_ACTIVATE;
  payload: Delivery;
};

export type ActiveDeliveryFinish = {
  type: ActiveDeliveryActionTypes.ACTIVE_DELIVERY_FINISH;
  payload: DeliveryFinish;
};

export type ActiveDeliveryActions = ActiveDeliveryActive | ActiveDeliveryFinish;
