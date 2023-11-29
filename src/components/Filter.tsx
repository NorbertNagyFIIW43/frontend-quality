import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Divider, Drawer, IconButton } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { filterByDate, openFilter } from '../store/FilterReducer';

function Filter() {
	const [fromValue, setFromValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
	const [toValue, setToValue] = React.useState<Dayjs | null>(dayjs('2022-07-17'));
	const open = useSelector((state: RootState) => state.filterReducer.open);
	const dispatch = useDispatch();
	const handleCloseFilter = () => {
		dispatch(openFilter());
	};

	useEffect(() => {
		dispatch(filterByDate({ from: fromValue, to: toValue }));
	}, [fromValue, toValue]);

	return (
		<Drawer variant="persistent" anchor="right" open={open} className="filter">
			<div className="filter-header">
				<IconButton onClick={handleCloseFilter}>
					<ChevronRightIcon />
				</IconButton>
			</div>
			<Divider />
			<div className="filter-datePickers">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateCalendar
						className="filter-datePickers-datePicker"
						value={fromValue}
						onChange={(newValue) => setFromValue(newValue)}
						defaultValue={dayjs('2022-04-17')}
					/>
					<DateCalendar
						className="filter-datePickers-datePicker"
						value={toValue}
						onChange={(newValue) => setToValue(newValue)}
						defaultValue={dayjs('2022-07-17')}
					/>
				</LocalizationProvider>
			</div>
		</Drawer>
	);
}
export default Filter;
