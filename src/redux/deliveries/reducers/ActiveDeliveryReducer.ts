import {StatusEnum} from '../../../common/enums/StatusEnum';
import {
  ActiveDeliveryActions,
  ActiveDeliveryActionTypes,
} from '../actions/ActiveDeliveryActions';
import {ActiveDelivery} from '../entitites/DeliveryEntity';

const initialState: ActiveDelivery = {
  id: '',
  address: '',
  city: '',
  zipCode: '',
  latitude: 0,
  longitude: 0,
  customer: '',
  status: StatusEnum.NotInformed,
  error: '',
};

export const activeDeliveryReducer = (
  state: ActiveDelivery = initialState,
  action: ActiveDeliveryActions,
) => {
  switch (action.type) {
    case ActiveDeliveryActionTypes.ACTIVE_DELIVERY_ACTIVATE:
      return {
        ...state,
        ...action.payload,
        status: StatusEnum.Ready,
        error: '',
      };
    case ActiveDeliveryActionTypes.ACTIVE_DELIVERY_FINISHING:
      return {
        ...state,
        status: StatusEnum.Loading,
      };
    case ActiveDeliveryActionTypes.ACTIVE_DELIVERY_FINISH:
      return {
        ...initialState,
      };
    case ActiveDeliveryActionTypes.ACTIVE_DELIVERY_ERROR:
      return {
        ...state,
        error: action.error,
        status: StatusEnum.Error,
      };
    default:
      return {...initialState};
  }
};
