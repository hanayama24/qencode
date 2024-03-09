import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import './App.css'
import LoginPage from './components/Login/LoginPage';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LogoIcon from './components/Icons/LogoIcon/LogoIcon';

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "/resetPassword",
		element: <ResetPassword />,
	},
	{
		path: "/forgotPassword",
		element: <ForgotPassword />,
	}
]);

const App = () => {
	return (
		<div id="App">
			<div className="qc-wrapper">
				<div className="qc-logo"><LogoIcon /></div>
				<RouterProvider router={router} />
			</div>
		</div>
	);
};

export default App;
