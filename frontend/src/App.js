import React from 'react';
// import Nav from '../../frontend/src/pages/Nav/Nav';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
// import Sidebar from './pages/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			        <Route path="/login" element={<Main />} />
			        <Route path="/" element={<LoginPage />} />
			     {' '}
		</Routes>
	);
}

export default App;
