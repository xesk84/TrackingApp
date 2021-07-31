import {combineReducers} from 'redux';
import {driverReducer} from './driver/reducer/DriverReducer';

export const rootReducer = combineReducers({driver: driverReducer});
export type RootState = ReturnType<typeof rootReducer>;
