import {Delivery} from '../entitites/DeliveryEntity';

export enum DeliveriesActionTypes {
  DELIVERIES_ACTION_REQUEST = 'DELIVERIES_ACTION_REQUEST',
  DELIVERIES_ACTION_FETCH = 'DELIVERIES_ACTION_FETCH',
  DELIVERIES_ACTION_ERROR = 'DELIVERIES_ACTION_ERROR',
  DELIVERIES_ACTION_LOGOUT = 'DELIVERIES_ACTION_LOGOUT',
}

export type DeliveriesRequest = {
  type: DeliveriesActionTypes.DELIVERIES_ACTION_REQUEST;
};

export type DeliveriesFetch = {
  type: DeliveriesActionTypes.DELIVERIES_ACTION_FETCH;
  payload: Array<Delivery>;
};

export type DeliveriesError = {
  type: DeliveriesActionTypes.DELIVERIES_ACTION_ERROR;
  error: string;
};

export type DeliveriesLogout = {
  type: DeliveriesActionTypes.DELIVERIES_ACTION_LOGOUT;
};

export type DeliveriesActions =
  | DeliveriesRequest
  | DeliveriesFetch
  | DeliveriesError
  | DeliveriesLogout;
