import {combineReducers} from 'redux';
import {activeDeliveryReducer} from './deliveries/reducers/ActiveDeliveryReducer';
import {deliveriesReducer} from './deliveries/reducers/DeliveryReducer';
import {driverReducer} from './driver/reducers/DriverReducer';

export const rootReducer = combineReducers({
  driver: driverReducer,
  deliveries: deliveriesReducer,
  activeDelivery: activeDeliveryReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
