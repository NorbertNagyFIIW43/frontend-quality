import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import logo from '../assets/images/Quality_Logo.png';
import { Button, ButtonGroup, IconButton } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useState } from 'react';
import Profile from './Profile';
const NavBar = () => {
	const [IsOpen, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen((prev) => !prev);
	};
	return (
		<>
			<nav className="nav">
				<div>
					<img src={logo} width={350} className="nav-logo" />
				</div>
				<div>
					<ButtonGroup variant="text" size="large" color="primary">
						<Link to="/home">
							<Button className="nav-button">Home</Button>
						</Link>
						<Link to="/charts">
							<Button className="nav-button">Charts</Button>
						</Link>
						<Link to="/reports">
							<Button className="nav-button">Reports</Button>
						</Link>
						<Link to="/dashboard">
							<Button className="nav-button">Dashboard</Button>
						</Link>
						<IconButton className="nav-icon" onClick={handleOpen}>
							<AccountBoxIcon />
						</IconButton>
					</ButtonGroup>
				</div>
			</nav>
			{IsOpen && <Profile handleOpen={handleOpen} />}
		</>
	);
};

export default NavBar;
