import '../assets/styles/App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Charts from '../pages/Charts';
import Home from '../pages/Home';
import NavBar from '../components/Navbar';
import Login from '../pages/Login';
import Templates from '../pages/Templates';
import Dashboard from '../pages/Dashboard';

function App() {
	const currentPath = useLocation();

	return (
		<>
			{currentPath.pathname != '/login' && <NavBar />}
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/home" element={<Home />} />
				<Route path="/charts" element={<Charts />} />
				<Route path="/login" element={<Login />} />
				<Route path="/reports" element={<Templates />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
