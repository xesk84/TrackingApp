import {StatusEnum} from '../../../common/enums/StatusEnum';
import {
  DeliveriesActions,
  DeliveriesActionTypes,
} from '../actions/DeliveriesActions';
import {Deliveries} from '../entitites/DeliveryEntity';

const initialState: Deliveries = {
  deliveries: [],
  status: StatusEnum.NotInformed,
  error: '',
};

export const deliveriesReducer = (
  state: Deliveries = initialState,
  action: DeliveriesActions,
) => {
  switch (action.type) {
    case DeliveriesActionTypes.DELIVERIES_ACTION_REQUEST:
      return {...state, status: StatusEnum.Loading};
    case DeliveriesActionTypes.DELIVERIES_ACTION_FETCH:
      return {
        ...state,
        deliveries: action.payload,
        error: '',
        status: StatusEnum.Ready,
      };
    case DeliveriesActionTypes.DELIVERIES_ACTION_ERROR:
      return {id: '', error: action.error, status: StatusEnum.Error};
    case DeliveriesActionTypes.DELIVERIES_ACTION_LOGOUT:
      return {...initialState};
    default:
      return state;
  }
};
