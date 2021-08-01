import {Dispatch} from 'redux';
import {DeliveriesActionTypes} from '../actions/DeliveriesActions';
import {Delivery} from '../entitites/DeliveryEntity';

export const getDeliveries = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DeliveriesActionTypes.DELIVERIES_ACTION_REQUEST,
    });
    setTimeout(() => {
      dispatch({
        type: DeliveriesActionTypes.DELIVERIES_ACTION_FETCH,
        payload: mockedDeliveries,
      });
    }, 1000);
  };
};

const mockedDeliveries: Array<Delivery> = [
  {
    id: 'A123',
    address: 'Pau Claris',
    city: 'Barcelona',
    zipCode: '08001',
    latitude: 1.231231231,
    longitude: 2.21312312,
    customer: 'Gerard Piqué',
  },
  {
    id: 'B456',
    address: 'Gran via',
    city: 'Barcelona',
    zipCode: '08002',
    latitude: 3.2342346,
    longitude: 6.667678904,
    customer: 'Laura Borràs',
  },
  {
    id: 'C987',
    address: 'Av. Eduard Matistany',
    city: 'Badalona',
    zipCode: '08002',
    latitude: 8.242342,
    longitude: 43.345345,
    customer: 'Mireia Belmonte',
  },
];
