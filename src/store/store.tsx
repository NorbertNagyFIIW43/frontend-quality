import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginReducer from './LoginReducer';
import filterReducer from './FilterReducer';
import TableReducer from './TableReducer';

const rootReducer = combineReducers({
	loginReducer,
	filterReducer,
	TableReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
