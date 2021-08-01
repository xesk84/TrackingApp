import {
  ActiveDeliveryActions,
  ActiveDeliveryActionTypes,
} from '../actions/ActiveDeliveryActions';
import {Delivery} from '../entitites/DeliveryEntity';

const initialState: Delivery = {
  id: '',
  address: '',
  city: '',
  zipCode: '',
  latitude: 0,
  longitude: 0,
  customer: '',
};

export const activeDeliveryReducer = (
  state: Delivery = initialState,
  action: ActiveDeliveryActions,
) => {
  switch (action.type) {
    case ActiveDeliveryActionTypes.ACTIVE_DELIVERY_ACTIVATE:
      return {
        ...state,
        ...action.payload,
      };
    case ActiveDeliveryActionTypes.ACTIVE_DELIVERY_FINISH:
      return {
        ...initialState,
      };
    default:
      return {...initialState};
  }
};
