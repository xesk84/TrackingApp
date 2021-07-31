import {StatusEnum} from '../../../common/enums/StatusEnum';
import {postTypes} from '../../Actiontypes/postsTypes';
import {Driver} from '../entities/Driver';
import {
  DriverError,
  DriverErrorPayload,
  DriverRequest,
  DriverFetch,
  DriverFetchPayload,
  DriverActions,
} from '../types/types';
import {DriverActionTypes} from '../actionTypes/DriverActionTypes';

const initialState: Driver = {
  id: '',
  status: StatusEnum.NotLoaded,
  error: '',
};

export const DriverReducer = (state = initialState, action: DriverActions) => {
  switch (action.type) {
    case DriverActionTypes.DRIVER_REQUEST:
      console.log('ens fiquem a loading');
      return {
        ...state,
        status: StatusEnum.Loading,
      };
    case DriverActionTypes.DRIVER_FETCH:
      return {
        ...state,
        status: StatusEnum.Ready,
        id: action.payload,
        error: null,
      };
    case DriverActionTypes.DRIVER_ERROR:
      return {
        ...state,
        status: StatusEnum.Error,
        driver: '',
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
