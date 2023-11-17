import '../assets/styles/App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Charts from '../pages/Charts';
import Home from '../pages/Home';
import NavBar from '../components/Navbar';
import Login from '../pages/Login';
import Templates from '../pages/Templates';

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
				<Route path="/templates" element={<Templates />} />
			</Routes>
		</>
	);
}

export default App;
