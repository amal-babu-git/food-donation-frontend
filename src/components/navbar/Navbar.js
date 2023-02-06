import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectAccessToken } from '../../features/auth/authUserSlice';
// import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const accessToken = useSelector(selectAccessToken);

	const onClickLogo = () => {
		navigate('/');
	};
	const onClickLogin = () => {
		navigate('/login');
	};
	const onClickLogout = () => {
		dispatch(logout());
	};
	const onClickAboutUs = () => {
		navigate('/about');
	};
	const onClickContactUs = () => {
		navigate('/contact');
	};
	const onClickProfile = () => {
		navigate('/user/profile');
	};
	const onClickRegister = () => {
		navigate('/register');
	};

	return (
		<>
			<div className="navbar bg-base-100v fixed">
				<div className="navbar-start">
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<button onClick={onClickProfile}>Profile</button>
							</li>
							<li>
								<button onClick={onClickAboutUs}>About Us</button>
							</li>

							<li>
								<button onClick={onClickContactUs}>Contact Us</button>
							</li>
						</ul>
					</div>

					<button
						className="btn btn-ghost normal-case text-xl"
						onClick={onClickLogo}
					>
						Warm Hugs
					</button>
					{/* <NavLink className="btn btn-ghost normal-case text-xl" href='/'>Warm Hugs</NavLink> */}
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<button onClick={onClickProfile}>Profile</button>
						</li>
						<li>
							<button onClick={onClickContactUs}>Contact Us</button>
						</li>
						<li>
							<button onClick={onClickAboutUs}>About Us</button>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<button
						className="btn btn-primary"
						onClick={onClickRegister}
					>
						Register
					</button>

					{/* if access token available then display Logout button else display login button */}
					{accessToken ? (
						<button
							className="btn btn-primary mx-1"
							onClick={onClickLogout}
						>
							Logout
						</button>
					) : (
						<button
							className="btn btn-primary mx-1"
							onClick={onClickLogin}
						>
							Login
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
