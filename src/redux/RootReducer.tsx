import {combineReducers} from 'redux';
import {deliveriesReducer} from './deliveries/reducers/DeliveryReducer';
import {driverReducer} from './driver/reducers/DriverReducer';

export const rootReducer = combineReducers({
  driver: driverReducer,
  deliveries: deliveriesReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
