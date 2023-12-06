import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import logo from '../assets/images/Quality_Logo.png';
import { Button, ButtonGroup, IconButton } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Profile from './Profile';
import MenuDrawer from './MenuDrawer';
import { NavButtons } from '../@types/allTypes';
const NavBar = () => {
	const [IsOpen, setOpen] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [selectedButton, setSelectedButton] = useState(NavButtons.HOME); // Set the default highlighted button

	const handleButtonClick = (buttonId: NavButtons) => {
		setSelectedButton(buttonId);
	};
	const handleOpenProf = () => {
		setOpen((prev) => !prev);
	};
	const handleOpenMenu = () => {
		setDrawerOpen((prev) => !prev);
	};
	return (
		<>
			<nav className="nav">
				<div>
					<img src={logo} width={350} className="nav-logo" />
				</div>
				<div>
					<ButtonGroup variant="text" size="large" color="primary" className="nav-buttonGroup-large">
						<Link to="/home">
							<Button
								onClick={() => {
									handleButtonClick(NavButtons.HOME);
								}}
								className={selectedButton == NavButtons.HOME ? 'nav-buttonGroup-button active' : 'nav-buttonGroup-button'}
							>
								Home
							</Button>
						</Link>
						<Link to="/charts">
							<Button
								onClick={() => {
									handleButtonClick(NavButtons.CHARTS);
								}}
								className={selectedButton == NavButtons.CHARTS ? 'nav-buttonGroup-button active' : 'nav-buttonGroup-button'}
							>
								Charts
							</Button>
						</Link>
						<Link to="/reports">
							<Button
								onClick={() => {
									handleButtonClick(NavButtons.REPORTS);
								}}
								className={selectedButton == NavButtons.REPORTS ? 'nav-buttonGroup-button active' : 'nav-buttonGroup-button'}
							>
								Reports
							</Button>
						</Link>
						<Link to="/dashboard">
							<Button
								onClick={() => {
									handleButtonClick(NavButtons.DASHBOARD);
								}}
								className={selectedButton == NavButtons.DASHBOARD ? 'nav-buttonGroup-button active' : 'nav-buttonGroup-button'}
							>
								Dashboard
							</Button>
						</Link>
						<IconButton className="nav-buttonGroup-account" onClick={handleOpenProf}>
							<AccountBoxIcon />
						</IconButton>
					</ButtonGroup>
					<ButtonGroup variant="text" size="large" className="nav-buttonGroup-small">
						<IconButton className="nav-buttonGroup-hamburger" onClick={handleOpenMenu}>
							<MenuIcon />
						</IconButton>
						<IconButton className="nav-buttonGroup-account" onClick={handleOpenProf}>
							<AccountBoxIcon />
						</IconButton>
					</ButtonGroup>
				</div>
			</nav>
			<MenuDrawer open={drawerOpen} close={handleOpenMenu} active={selectedButton} handleButtonClick={handleButtonClick} />
			{IsOpen && <Profile handleOpen={handleOpenProf} />}
		</>
	);
};

export default NavBar;
