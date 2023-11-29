import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';

const initalState: { open: boolean; from: Dayjs | null; to: Dayjs | null } = {
	open: false,
	from: null,
	to: null,
};

const filterSlice = createSlice({
	name: 'filter',
	initialState: initalState,
	reducers: {
		openFilter: (state) => {
			state.open = !state.open;
		},
		filterByDate: (state, action: PayloadAction<{ from: Dayjs | null; to: Dayjs | null }>) => {
			state.from = action.payload.from;
			state.to = action.payload.to;
		},
	},
});
export const { openFilter, filterByDate } = filterSlice.actions;
export default filterSlice.reducer;
