import { Button, Chip, IconButton, Menu, MenuItem, Paper, Stack, Toolbar } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByDate, openFilter } from '../store/FilterReducer';
import FilterListIcon from '@mui/icons-material/FilterList';
import { RootState } from '../store/store';
import { setReport } from '../store/TableReducer';

function TemplateSelector() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const report = useSelector((state: RootState) => state.TableReducer.currentReport);
	const filter = useSelector((state: RootState) => state.filterReducer);
	const dispatch = useDispatch();
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (event: any) => {
		setAnchorEl(null);
		dispatch(setReport(event.target.innerText));
	};
	const handleDeleteReport = () => {
		dispatch(setReport(undefined));
	};
	const handleDeleteFilter = () => {
		dispatch(filterByDate({ from: null, to: null }));
	};
	const handleOpenFilter = () => {
		dispatch(openFilter());
	};

	return (
		<Paper className="template-selector">
			<Toolbar className="template-selector-toolbar">
				<Button
					className="template-selector-toolbar-button"
					id="basic-button"
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
					variant="contained"
					endIcon={<KeyboardArrowDownIcon />}
				>
					Add Template
				</Button>
				<Menu className="template-selector-toolbar-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
					<MenuItem onClick={handleClose}>Report 1</MenuItem>
					<MenuItem onClick={handleClose}>Report 2</MenuItem>
					<MenuItem onClick={handleClose}>Report 3</MenuItem>
				</Menu>
				<IconButton className="template-selector-toolbar-filter" onClick={handleOpenFilter}>
					<FilterListIcon />
				</IconButton>
			</Toolbar>
			<Stack className="template-selector-stack" direction="row" spacing={2}>
				{report && <Chip label={report} onDelete={handleDeleteReport} />}
				{filter.from && <Chip label={`${filter.from} - ${filter.to}`} onDelete={handleDeleteFilter} />}
			</Stack>
		</Paper>
	);
}
export default TemplateSelector;
