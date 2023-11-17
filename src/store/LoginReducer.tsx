import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initalState: { user: string | undefined; isLoggedIn: boolean } = { user: undefined, isLoggedIn: false };

const loginSlice = createSlice({
	name: 'login',
	initialState: initalState,
	reducers: {
		login: (state, action: PayloadAction<string | undefined>) => {
			state.isLoggedIn = true;
			state.user = action.payload;
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.user = undefined;
		},
	},
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
