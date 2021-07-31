import {combineReducers} from 'redux';
import {DriverReducer} from './driver/reducers/DriverReducer';

const rootReducer = combineReducers({
  driver: DriverReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
