import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({
	loginReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
