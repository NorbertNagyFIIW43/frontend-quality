import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initalState: { currentReport: string | undefined } = {
	currentReport: undefined,
};

const tableSlice = createSlice({
	name: 'table',
	initialState: initalState,
	reducers: {
		setReport: (state, action: PayloadAction<string | undefined>) => {
			state.currentReport = action.payload;
		},
	},
});
export const { setReport } = tableSlice.actions;
export default tableSlice.reducer;
