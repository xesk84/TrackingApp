import {Dispatch} from 'redux';
import {mockedGetDeliveries} from '../../../common/services/ApiService';
import {DeliveriesActionTypes} from '../actions/DeliveriesActions';

export const getDeliveries = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DeliveriesActionTypes.DELIVERIES_ACTION_REQUEST,
    });
    mockedGetDeliveries('/deliveries').then(result => {
      dispatch({
        type: DeliveriesActionTypes.DELIVERIES_ACTION_FETCH,
        payload: result,
      });
    });
  };
};
