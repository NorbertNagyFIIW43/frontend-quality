import { Button, ButtonGroup, IconButton, Toolbar } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useDispatch } from 'react-redux';
import { openFilter } from '../store/FilterReducer';

function ChartsToolbar() {
	const dispatch = useDispatch();
	const handleOpenFilter = () => {
		dispatch(openFilter());
	};
	return (
		<Toolbar className="toolbar">
			<ButtonGroup variant="text" aria-label="text button group" className="toolbar-buttons">
				<Button className="toolbar-buttons-button">Summary</Button>
				<Button className="toolbar-buttons-button">Two</Button>
				<Button className="toolbar-buttons-button">Three</Button>
				<Button className="toolbar-buttons-button">Four</Button>
			</ButtonGroup>
			<IconButton className="toolbar-filter" onClick={handleOpenFilter}>
				<FilterListIcon />
			</IconButton>
		</Toolbar>
	);
}

export default ChartsToolbar;
