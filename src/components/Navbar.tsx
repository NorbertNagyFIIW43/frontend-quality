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
							<Button sx={{ border: '0px !important', fontSize: 25 }}>Home</Button>
						</Link>
						<Link to="/charts">
							<Button sx={{ border: '0px !important', fontSize: 25 }}>Charts</Button>
						</Link>
						<Link to="/templates">
							<Button sx={{ border: '0px !important', fontSize: 25 }}>Templates</Button>
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
