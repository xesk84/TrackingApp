import {StatusEnum} from '../../../common/enums/StatusEnum';
import {DriverActions, DriverActionTypes} from '../actions/DriverActions';
import {Driver} from '../entities/DriverEntity';

const initialState: Driver = {
  id: '',
  status: StatusEnum.NotInformed,
  error: '',
};

export const driverReducer = (
  state: Driver = initialState,
  action: DriverActions,
) => {
  switch (action.type) {
    case DriverActionTypes.DRIVER_ACTION_REQUEST:
      return {...state, status: StatusEnum.Loading};
    case DriverActionTypes.DRIVER_ACTION_FETCH:
      return {
        ...state,
        id: action.payload.id,
        error: '',
        status: StatusEnum.Ready,
      };
    case DriverActionTypes.DRIVER_ACTION_ERROR:
      return {id: '', error: action.error, status: StatusEnum.Error};
    case DriverActionTypes.DRIVER_ACTION_LOGOUT:
      return {...initialState};
    default:
      return state;
  }
};
