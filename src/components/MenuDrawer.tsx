import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, ButtonGroup, Divider, Drawer, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavButtons } from '../@types/allTypes';

function MenuDrawer(props: any) {
	return (
		<Drawer variant="persistent" anchor="right" open={props.open} className="menuDrawer">
			<div className="menuDrawer-header">
				<IconButton onClick={props.close}>
					<ChevronRightIcon />
				</IconButton>
			</div>
			<Divider />
			<ButtonGroup variant="text" size="large" color="primary" className="menuDrawer-buttonGroup">
				<Link to="/home">
					<Button
						onClick={() => {
							props.handleButtonClick(NavButtons.HOME);
						}}
						className={
							props.active == NavButtons.HOME ? 'menuDrawer-buttonGroup-button active' : 'menuDrawer-buttonGroup-button'
						}
					>
						Home
					</Button>
				</Link>
				<Link to="/charts">
					<Button
						onClick={() => {
							props.handleButtonClick(NavButtons.CHARTS);
						}}
						className={
							props.active == NavButtons.CHARTS ? 'menuDrawer-buttonGroup-button active' : 'menuDrawer-buttonGroup-button'
						}
					>
						Charts
					</Button>
				</Link>
				<Link to="/reports">
					<Button
						onClick={() => {
							props.handleButtonClick(NavButtons.REPORTS);
						}}
						className={
							props.active == NavButtons.REPORTS ? 'menuDrawer-buttonGroup-button active' : 'menuDrawer-buttonGroup-button'
						}
					>
						Reports
					</Button>
				</Link>
				<Link to="/dashboard">
					<Button
						onClick={() => {
							props.handleButtonClick(NavButtons.DASHBOARD);
						}}
						className={
							props.active == NavButtons.DASHBOARD ? 'menuDrawer-buttonGroup-button active' : 'menuDrawer-buttonGroup-button'
						}
					>
						Dashboard
					</Button>
				</Link>
			</ButtonGroup>
		</Drawer>
	);
}
export default MenuDrawer;
