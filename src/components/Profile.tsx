import { Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FuncProps } from '../@types/allTypes';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/LoginReducer';
import { RootState } from '../store/store';
import '../assets/styles/Profile.css';
import { useNavigate } from 'react-router';
function Profile(props: FuncProps) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const currentUser = useSelector((state: RootState) => state.loginReducer.user);

	const handleLogout = () => {
		dispatch(logout());
		navigate('/login');
	};
	return (
		<div className="profile">
			<div>
				<IconButton className="profile-close" onClick={props.handleOpen}>
					<CloseIcon />
				</IconButton>
			</div>
			<h4 className="profile-currentUser">{currentUser}</h4>
			<Divider />
			<div className="profile-buttons">
				<button>Settings</button>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</div>
	);
}
export default Profile;
