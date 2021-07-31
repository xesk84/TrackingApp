import {useDispatch} from 'react-redux';
import {DriverActionTypes} from '../reducer/DriverReducer';

export const LoginDriver = (id: string, password: string) => {
  const dispatch = useDispatch();
  console.log(`entra id ${id} i pass ${password}`);
  dispatch({
    type: DriverActionTypes.DRIVER_ACTION_REQUEST,
  });
  dispatch({
    type: DriverActionTypes.DRIVER_ACTION_FETCH,
    payload: {id: id},
  });
};
